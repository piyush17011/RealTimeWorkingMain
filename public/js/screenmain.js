// ─── CONFIG ────────────────────────────────────────────────────────────────
// Replace with your actual Render URL (no trailing slash)
const PYTHON_SERVER_URL = "https://realtimeworkingmain.onrender.com";
// ───────────────────────────────────────────────────────────────────────────

const createUserBtn   = document.getElementById("create-user");
const username        = document.getElementById("username");
const allusersHtml    = document.getElementById("allusers");
const localVideo      = document.getElementById("localVideo");
const remoteVideo     = document.getElementById("remoteVideo");
const endCallBtn      = document.getElementById("end-call-btn");
const muteBtn         = document.getElementById("mute-audio-btn");
const videoToggleBtn  = document.getElementById("toggle-video-btn");
const shareScreenBtn  = document.getElementById("share-screen-btn");
const stopScreenShareBtn = document.getElementById("stop-screen-share-btn");

let screenStream  = null;
let localStream   = null;
let isScreenSharing = false;
let caller = [];
let captionInterval = null;   // only run while a call is active

const socket = io();

// ─── CAPTION OVERLAY ────────────────────────────────────────────────────────
// Creates a <div> overlay on top of the local video to show the predicted sign.
// This is correct — you cannot call .getContext('2d') on a <video> element.
function getOrCreateCaptionOverlay() {
    let overlay = document.getElementById("local-caption-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "local-caption-overlay";
        overlay.style.cssText = [
            "position:absolute", "bottom:10px", "left:50%",
            "transform:translateX(-50%)",
            "background:rgba(0,0,0,0.7)", "color:#fff",
            "font-size:20px", "font-weight:bold",
            "padding:6px 14px", "border-radius:8px",
            "pointer-events:none", "z-index:10",
            "white-space:nowrap", "max-width:90%",
            "text-align:center"
        ].join(";");
        // The video element's parent must have position:relative for absolute
        // positioning to work — ensure that in your CSS (.local-video already has it).
        const container = localVideo.parentElement || document.body;
        container.style.position = "relative";
        container.appendChild(overlay);
    }
    return overlay;
}

function displayGesture(gesture) {
    const overlay = getOrCreateCaptionOverlay();
    overlay.textContent = gesture || "";
}

// ─── FRAME CAPTURE & PREDICTION ─────────────────────────────────────────────
// Bug fixed: was calling convertToBase64(canvas) → passing the resulting
// *string* into detectHandGestures, which called convertToBase64(string) again
// → string has no .toDataURL() → returned null → sent null to server.
// Now processVideoFrame calls detectHandGestures directly with the canvas.

const offscreenCanvas = document.createElement("canvas");
const offscreenCtx = offscreenCanvas.getContext("2d");

async function processVideoFrame() {
    if (!localVideo.srcObject) return;
    if (localVideo.videoWidth === 0 || localVideo.videoHeight === 0) return;
    if (localVideo.readyState < localVideo.HAVE_CURRENT_DATA) return;

    offscreenCanvas.width  = localVideo.videoWidth;
    offscreenCanvas.height = localVideo.videoHeight;
    offscreenCtx.drawImage(localVideo, 0, 0);

    // Get the base64 data URL directly from the canvas here — don't pass the
    // canvas to another function that tries to call .toDataURL() again.
    const dataUrl = offscreenCanvas.toDataURL("image/jpeg", 0.7);

    await detectHandGestures(dataUrl);
}

async function detectHandGestures(dataUrl) {
    // dataUrl is "data:image/jpeg;base64,/9j/..."
    // Flask's app.py already handles stripping the prefix, so send as-is.
    const formData = new FormData();
    formData.append("frame", dataUrl);

    try {
        const response = await fetch(`${PYTHON_SERVER_URL}/predict`, {
            method: "POST",
            body: formData
            // Do NOT set Content-Type manually — browser sets multipart boundary automatically.
        });

        if (!response.ok) {
            const errText = await response.text();
            console.warn("Prediction server error:", response.status, errText);
            displayGesture("⚠ server error");
            return;
        }

        const data = await response.json();

        if (data.error) {
            console.warn("Prediction error:", data.error);
            displayGesture("");
            return;
        }

        const gesture = data.prediction || "";
        displayGesture(gesture);

        // Also broadcast to the remote peer via socket so they can see your caption.
        if (gesture && username.value) {
            socket.emit("caption-update", { from: username.value, caption: gesture });
        }

    } catch (err) {
        // Network error (e.g. Render cold-start, CORS, timeout)
        console.warn("Caption fetch failed:", err.message);
        displayGesture("⚠ connecting…");
    }
}

// ─── CAPTION INTERVAL CONTROL ───────────────────────────────────────────────
// Bug fixed: interval was firing immediately at page load before video was
// ready, and kept running even when no call was active (wasting requests).
// Now it starts only after a call connects and stops when the call ends.

function startCaptionLoop() {
    if (captionInterval) return;          // already running
    captionInterval = setInterval(processVideoFrame, 500); // 2 fps is plenty for signs
}

function stopCaptionLoop() {
    if (captionInterval) {
        clearInterval(captionInterval);
        captionInterval = null;
    }
    displayGesture("");
}

// ─── PEER CONNECTION ────────────────────────────────────────────────────────
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
        pc.ontrack = (e) => { remoteVideo.srcObject = e.streams[0]; };
        pc.onicecandidate = (e) => {
            if (e.candidate) socket.emit("icecandidate", e.candidate);
        };
        pc.onconnectionstatechange = () => {
            if (pc.connectionState === "connected") {
                startCaptionLoop();
            }
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

// ─── SOCKET: REMOTE CAPTION DISPLAY ─────────────────────────────────────────
socket.on("caption-update", (data) => {
    if (!data) return;
    // Don't echo our own captions back to ourselves
    if (data.from && username.value && data.from === username.value) return;
    const el = document.getElementById("remoteCaptionText");
    if (el) el.innerText = `${data.from || "Remote"}: ${data.caption || ""}`;
});

// ─── USER JOIN ───────────────────────────────────────────────────────────────
createUserBtn.addEventListener("click", async () => {
    const name = username.value.trim();
    if (!name) return;
    createUserBtn.disabled = true;
    await startMyVideo();
    socket.emit("join-user", name);
    const sec = document.querySelector(".username-input");
    if (sec) sec.style.display = "none";
});

// ─── CALL CONTROL ────────────────────────────────────────────────────────────
endCallBtn.addEventListener("click", () => {
    socket.emit("call-ended", caller);
    endCall();
});

socket.on("joined", (allusers) => {
    allusersHtml.innerHTML = "";
    for (const user in allusers) {
        const li = document.createElement("li");
        li.textContent = `${user} ${user === username.value ? "(You)" : ""}`;
        if (user !== username.value) {
            const button = document.createElement("button");
            button.classList.add("call-btn");
            button.addEventListener("click", () => startCall(user));
            const img = document.createElement("img");
            img.setAttribute("src", "/images/phone.png");
            img.setAttribute("width", 20);
            button.appendChild(img);
            li.appendChild(button);
        }
        allusersHtml.appendChild(li);
    }
});

socket.on("offer", async ({ from, to, offer }) => {
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(offer);
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    socket.emit("answer", { from, to, answer: pc.localDescription });
    caller = [from, to];
    endCallBtn.style.display = "block";
    startCaptionLoop(); // caller side: start captions when offer arrives
});

socket.on("answer", async ({ from, to, answer }) => {
    const pc = PeerConnection.getInstance();
    await pc.setRemoteDescription(answer);
    caller = [from, to];
    endCallBtn.style.display = "block";
    startCaptionLoop(); // callee side: start captions on answer
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
    endCallBtn.style.display = "block";
};

const endCall = () => {
    stopCaptionLoop();
    const pc = PeerConnection.getInstance();
    if (pc) pc.close();
    caller = [];
    endCallBtn.style.display = "none";
    remoteVideo.srcObject = null;
    PeerConnection.reset();
};

// ─── MEDIA CONTROLS ──────────────────────────────────────────────────────────
muteBtn.addEventListener("click", () => {
    if (!localStream) return;
    const t = localStream.getAudioTracks()[0];
    t.enabled = !t.enabled;
    muteBtn.textContent = t.enabled ? "Mute" : "Unmute";
});

videoToggleBtn.addEventListener("click", () => {
    if (!localStream) return;
    const t = localStream.getVideoTracks()[0];
    t.enabled = !t.enabled;
    videoToggleBtn.textContent = t.enabled ? "Video Off" : "Video On";
});

const startScreenSharing = async () => {
    try {
        screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        const screenShareTrack = screenStream.getVideoTracks()[0];
        localVideo.srcObject = screenStream;
        const pc = PeerConnection.getInstance();
        const sender = pc.getSenders().find(s => s.track && s.track.kind === "video");
        if (sender) sender.replaceTrack(screenShareTrack);
        screenShareTrack.onended = stopScreenSharing;
        isScreenSharing = true;
        shareScreenBtn.textContent = "Stop Share";
    } catch (e) {
        console.warn("Screen share error:", e);
    }
};

const stopScreenSharing = () => {
    if (screenStream) { screenStream.getTracks().forEach(t => t.stop()); screenStream = null; }
    if (localStream) {
        localVideo.srcObject = localStream;
        const pc = PeerConnection.getInstance();
        if (pc && pc.connectionState !== "closed") {
            const sender = pc.getSenders().find(s => s.track && s.track.kind === "video");
            if (sender && localStream.getVideoTracks()[0]) {
                sender.replaceTrack(localStream.getVideoTracks()[0]);
            }
        }
    }
    isScreenSharing = false;
    shareScreenBtn.textContent = "Share Screen";
};

shareScreenBtn.addEventListener("click", () => {
    if (isScreenSharing) stopScreenSharing();
    else startScreenSharing();
});
stopScreenShareBtn.addEventListener("click", stopScreenSharing);

window.addEventListener("beforeunload", () => {
    stopCaptionLoop();
    if (username.value) socket.emit("leave-user", username.value);
    if (localStream) localStream.getTracks().forEach(t => t.stop());
});

// ─── START VIDEO ON LOAD ──────────────────────────────────────────────────────
// Bug fixed: previously called startMyVideo() synchronously and immediately
// started the interval. Now video starts on load but the caption interval
// only starts once a call is actually connected.
async function startMyVideo() {
    try {
        if (localStream) { localStream.getTracks().forEach(t => t.stop()); localStream = null; }
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
        localVideo.muted = true;
    } catch (err) {
        console.error("Camera error:", err.name, err.message);
        alert("Could not access camera/microphone: " + err.message);
    }
}

startMyVideo();
