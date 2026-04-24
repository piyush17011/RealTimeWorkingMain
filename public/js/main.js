const createUserBtn = document.getElementById("create-user");
const username = document.getElementById("username");
const allusersHtml = document.getElementById("allusers");
const localVideo = document.getElementById("localVideo");
const remoteVideo = document.getElementById("remoteVideo");
const endCallBtn = document.getElementById("end-call-btn");
const muteBtn = document.getElementById("mute-audio-btn");
const videoToggleBtn = document.getElementById("toggle-video-btn");
const shareScreenBtn = document.getElementById("share-screen-btn");
const stopScreenShareBtn = document.getElementById("stop-screen-share-btn");

let screenStream = null;
let localStream = null;
let isScreenSharing = false;
let isMuted = false;
let isVideoOff = false;
let caller = [];
let dataChannel = null;
let screenShareTrack = null;

const socket = io();

// ─────────────────────────────────────────────
// CAMERA — called ONLY after a user gesture
// ─────────────────────────────────────────────
async function startMyVideo(retrying = false) {
    try {
        // Stop existing tracks before requesting new ones
        if (localStream) {
            localStream.getTracks().forEach(t => t.stop());
            localStream = null;
        }

        localStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },  // no resolution constraints — let the camera use its natural FOV
            audio: true
        });

        localVideo.srcObject = localStream;
        localVideo.muted = true;          // prevent echo on self-view

        // Re-apply any active mute/video-off state if recovering
        if (isMuted)    localStream.getAudioTracks().forEach(t => { t.enabled = false; });
        if (isVideoOff) localStream.getVideoTracks().forEach(t => { t.enabled = false; });

        // Auto-recover if the OS revokes the camera (e.g. another app grabs it)
        localStream.getTracks().forEach(track => {
            track.onended = () => {
                if (track.kind === "video" && !isScreenSharing) {
                    showCameraError("Camera disconnected — reconnecting…");
                    setTimeout(() => startMyVideo(), 2000);
                }
            };
        });

        hideCameraError();

        // If already in a call, replace the track in the peer connection
        if (typeof PeerConnection !== "undefined") {
            const pc = PeerConnection.getInstance();
            if (pc && pc.connectionState !== "closed" && pc.connectionState !== "new") {
                localStream.getTracks().forEach(newTrack => {
                    const sender = pc.getSenders().find(
                        s => s.track && s.track.kind === newTrack.kind
                    );
                    if (sender) sender.replaceTrack(newTrack);
                    else pc.addTrack(newTrack, localStream);
                });
            }
        }

    } catch (err) {
        console.error("getUserMedia:", err.name, err.message);

        if (err.name === "NotReadableError" && !retrying) {
            showCameraError("Camera busy — retrying in 3 s…");
            setTimeout(() => startMyVideo(true), 3000);

        } else if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
            showCameraError(
                "Camera/mic permission denied. Please allow access in your browser settings, then tap Join again."
            );

        } else if (err.name === "NotFoundError") {
            showCameraError("No camera found on this device.");

        } else if (err.name === "OverconstrainedError" && !retrying) {
            // Retry with no constraints
            showCameraError("Camera constraints unsupported — trying fallback…");
            try {
                localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                localVideo.srcObject = localStream;
                localVideo.muted = true;
                hideCameraError();
            } catch (e2) {
                showCameraError("Could not access camera: " + e2.message);
            }

        } else {
            showCameraError("Camera error: " + err.message);
        }
    }
}

function showCameraError(msg) {
    let b = document.getElementById("cam-err-banner");
    if (!b) {
        b = document.createElement("div");
        b.id = "cam-err-banner";
        b.style.cssText =
            "position:fixed;bottom:1rem;left:50%;transform:translateX(-50%);" +
            "background:#7f1d1d;color:#fff;padding:.6rem 1.2rem;border-radius:8px;" +
            "font-size:.85rem;z-index:9999;max-width:90vw;text-align:center;" +
            "box-shadow:0 4px 12px rgba(0,0,0,.35);";
        document.body.appendChild(b);
    }
    b.textContent = msg;
    b.style.display = "block";
}
function hideCameraError() {
    const b = document.getElementById("cam-err-banner");
    if (b) b.style.display = "none";
}

// ─────────────────────────────────────────────
// PeerConnection singleton
// ─────────────────────────────────────────────
const PeerConnection = (function () {
    let pc;

    const create = () => {
        pc = new RTCPeerConnection({
            iceServers: [
                { urls: "stun:stun.l.google.com:19302" },
                { urls: "stun:stun1.l.google.com:19302" }
            ]
        });

        if (localStream) {
            localStream.getTracks().forEach(t => pc.addTrack(t, localStream));
        }

        // Caller creates channel; callee receives it
        dataChannel = pc.createDataChannel("captionChannel");
        setupDataChannelHandlers(dataChannel);

        pc.ondatachannel = (e) => {
            dataChannel = e.channel;
            setupDataChannelHandlers(dataChannel);
        };

        pc.ontrack = (e) => { remoteVideo.srcObject = e.streams[0]; };

        pc.onicecandidate = (e) => {
            if (e.candidate) socket.emit("icecandidate", e.candidate);
        };

        pc.onconnectionstatechange = () => {
            if (pc.connectionState === "disconnected" || pc.connectionState === "failed") {
                endCall();
            }
        };

        return pc;
    };

    return {
        getInstance: () => {
            if (!pc || pc.connectionState === "closed") pc = create();
            return pc;
        },
        reset: () => { pc = null; }
    };
})();

// ─────────────────────────────────────────────
// Data channel — captions over WebRTC
// ─────────────────────────────────────────────
function setupDataChannelHandlers(channel) {
    channel.onmessage = (e) => {
        try {
            const { caption } = JSON.parse(e.data);
            const el = document.getElementById("remoteCaptionText");
            if (el && caption !== undefined) el.innerText = `Remote: ${caption}`;
        } catch (_) {
            const el = document.getElementById("remoteCaptionText");
            if (el) el.innerText = `Remote: ${e.data}`;
        }
    };
}

// ─────────────────────────────────────────────
// Socket — caption broadcast (fallback via server relay)
// ─────────────────────────────────────────────
socket.on("caption-update", (data) => {
    if (!data) return;
    if (data.from && username.value && data.from === username.value) return;
    const el = document.getElementById("remoteCaptionText");
    if (el) el.innerText = `${data.from || "Remote"}: ${data.caption || ""}`;
});

// ─────────────────────────────────────────────
// JOIN — camera is requested HERE (after user gesture)
// ─────────────────────────────────────────────
createUserBtn.addEventListener("click", async () => {
    const name = username.value.trim();
    if (!name) return;

    createUserBtn.disabled = true;
    createUserBtn.textContent = "Joining…";

    // getUserMedia MUST be called inside a user-gesture handler for mobile
    await startMyVideo();

    socket.emit("join-user", name);

    const sec = document.querySelector(".username-section");
    if (sec) sec.style.display = "none";
});

// ─────────────────────────────────────────────
// End call
// ─────────────────────────────────────────────
endCallBtn.addEventListener("click", () => {
    socket.emit("call-ended", caller);
    endCall();
});

// ─────────────────────────────────────────────
// Contacts list
// ─────────────────────────────────────────────
socket.on("joined", (allusers) => {
    allusersHtml.innerHTML = "";
    for (const user in allusers) {
        const li = document.createElement("li");
        li.textContent = `${user}${user === username.value ? " (You)" : ""}`;

        if (user !== username.value) {
            const button = document.createElement("button");
            button.classList.add("call-btn");
            button.title = `Call ${user}`;
            button.addEventListener("click", () => startCall(user));
            const img = document.createElement("img");
            img.setAttribute("src", "/images/phone.png");
            img.setAttribute("alt", "Call");
            button.appendChild(img);
            li.appendChild(button);
        }

        allusersHtml.appendChild(li);
    }
});

// ─────────────────────────────────────────────
// WebRTC signalling
// ─────────────────────────────────────────────
socket.on("offer", async ({ from, to, offer }) => {
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(offer);
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    socket.emit("answer", { from, to, answer: pc.localDescription });
    caller = [from, to];
    endCallBtn.style.display = "flex";
});

socket.on("answer", async ({ from, to, answer }) => {
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(answer);
    caller = [from, to];
    endCallBtn.style.display = "flex";
});

socket.on("icecandidate", async (candidate) => {
    const pc = PeerConnection.getInstance();
    try { await pc.addIceCandidate(new RTCIceCandidate(candidate)); }
    catch (e) { console.warn("ICE error:", e); }
});

socket.on("call-ended", () => endCall());

const startCall = async (user) => {
    const pc = PeerConnection.getInstance();
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    socket.emit("offer", { from: username.value, to: user, offer: pc.localDescription });
    endCallBtn.style.display = "flex";
};

const endCall = () => {
    const pc = PeerConnection.getInstance();
    if (pc) pc.close();
    caller = [];
    endCallBtn.style.display = "none";
    remoteVideo.srcObject = null;
    PeerConnection.reset();
};

// ─────────────────────────────────────────────
// Mute / Video Off
// ─────────────────────────────────────────────
muteBtn.addEventListener("click", () => {
    if (!localStream) return;
    isMuted = !isMuted;
    localStream.getAudioTracks().forEach(t => { t.enabled = !isMuted; });
    muteBtn.textContent = isMuted ? "Unmute" : "Mute";
});

videoToggleBtn.addEventListener("click", () => {
    if (!localStream) return;
    isVideoOff = !isVideoOff;
    localStream.getVideoTracks().forEach(t => { t.enabled = !isVideoOff; });
    // Label = what the button does NEXT click
    videoToggleBtn.textContent = isVideoOff ? "Video On" : "Video Off";
});

// ─────────────────────────────────────────────
// Screen sharing
// ─────────────────────────────────────────────
const startScreenSharing = async () => {
    try {
        screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        screenShareTrack = screenStream.getVideoTracks()[0];
        localVideo.srcObject = screenStream;
        const pc = PeerConnection.getInstance();
        const sender = pc.getSenders().find(s => s.track && s.track.kind === "video");
        if (sender) sender.replaceTrack(screenShareTrack);
        screenShareTrack.onended = stopScreenSharing;
        isScreenSharing = true;
        shareScreenBtn.textContent = "Stop Share";
    } catch (e) {}
};
const stopScreenSharing = () => {
    if (screenStream) { screenStream.getTracks().forEach(t => t.stop()); screenStream = null; }
    if (localStream) {
        localVideo.srcObject = localStream;
        const pc = PeerConnection.getInstance();
        if (pc && pc.connectionState !== "closed") {
            const sender = pc.getSenders().find(s => s.track === screenShareTrack);
            if (sender && localStream.getVideoTracks()[0]) {
                sender.replaceTrack(localStream.getVideoTracks()[0]);
            }
        }
    }
    screenShareTrack = null;
    isScreenSharing = false;
    shareScreenBtn.textContent = "Share Screen";
};
shareScreenBtn.addEventListener("click", () => {
    if (isScreenSharing) stopScreenSharing();
    else startScreenSharing();
});
stopScreenShareBtn.addEventListener("click", stopScreenSharing);

// ─────────────────────────────────────────────
// Cleanup on page unload — remove user from server list
// ─────────────────────────────────────────────
window.addEventListener("beforeunload", () => {
    if (username.value) socket.emit("leave-user", username.value);
    if (localStream) localStream.getTracks().forEach(t => t.stop());
});
