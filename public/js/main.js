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
let caller = [];
let dataChannel = null;
let screenShareTrack = null;

const socket = io();

// ---- PeerConnection singleton ----
const PeerConnection = (function () {
    let peerConnection;

    const createPeerConnection = () => {
        const config = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
        peerConnection = new RTCPeerConnection(config);

        if (localStream) {
            localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));
        }

        // Data channel for captions (caller side creates it)
        dataChannel = peerConnection.createDataChannel("captionChannel");
        setupDataChannelHandlers(dataChannel);

        // Callee side: handle incoming data channel
        peerConnection.ondatachannel = (event) => {
            dataChannel = event.channel;
            setupDataChannelHandlers(dataChannel);
        };

        peerConnection.ontrack = function (event) {
            remoteVideo.srcObject = event.streams[0];
        };

        peerConnection.onicecandidate = function (event) {
            if (event.candidate) {
                socket.emit("icecandidate", event.candidate);
            }
        };

        return peerConnection;
    };

    return {
        getInstance: () => {
            if (!peerConnection || peerConnection.connectionState === "closed") {
                peerConnection = createPeerConnection();
            }
            return peerConnection;
        },
        reset: () => { peerConnection = null; }
    };
})();

// ---- Data channel handlers ----
function setupDataChannelHandlers(channel) {
    channel.onmessage = (event) => {
        try {
            const { caption } = JSON.parse(event.data);
            const el = document.getElementById("remoteCaptionText");
            if (el && caption !== undefined) {
                el.innerText = `Remote: ${caption}`;
            }
        } catch (e) {
            // plain text fallback
            const el = document.getElementById("remoteCaptionText");
            if (el) el.innerText = `Remote: ${event.data}`;
        }
    };
}

// ---- Socket: receive caption from remote user ----
socket.on("caption-update", (data) => {
    if (!data) return;
    // Only show captions from OTHER users (not our own echo)
    if (data.from && username.value && data.from === username.value) return;
    const el = document.getElementById("remoteCaptionText");
    if (el) {
        el.innerText = `${data.from || 'Remote'}: ${data.caption || ''}`;
    }
});

// ---- Create user ----
createUserBtn.addEventListener("click", () => {
    if (username.value.trim() !== "") {
        socket.emit("join-user", username.value.trim());
        // Hide the input area after joining
        const usernameSection = document.querySelector(".username-section");
        if (usernameSection) usernameSection.style.display = "none";
    }
});

// ---- End call ----
endCallBtn.addEventListener("click", () => {
    socket.emit("call-ended", caller);
    endCall();
});

// ---- Render contacts list ----
socket.on("joined", (allusers) => {
    allusersHtml.innerHTML = "";
    for (const user in allusers) {
        const li = document.createElement("li");
        li.textContent = `${user} ${user === username.value ? "(You)" : ""}`;

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

// ---- WebRTC signalling ----
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
    await pc.addIceCandidate(new RTCIceCandidate(candidate));
});

socket.on("call-ended", () => endCall());

// ---- Start / end call ----
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
    PeerConnection.reset();
};

// ---- Media controls ----
muteBtn.addEventListener("click", () => {
    if (localStream) {
        const audioTrack = localStream.getAudioTracks()[0];
        audioTrack.enabled = !audioTrack.enabled;
        muteBtn.textContent = audioTrack.enabled ? "Mute" : "Unmute";
    }
});

videoToggleBtn.addEventListener("click", () => {
    if (localStream) {
        const videoTrack = localStream.getVideoTracks()[0];
        videoTrack.enabled = !videoTrack.enabled;
        videoToggleBtn.textContent = videoTrack.enabled ? "Video Off" : "Video On";
    }
});

// ---- Screen sharing ----
shareScreenBtn.addEventListener("click", () => {
    if (isScreenSharing) stopScreenSharing();
    else startScreenSharing();
});

stopScreenShareBtn.addEventListener("click", stopScreenSharing);

const startScreenSharing = async () => {
    try {
        screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        localVideo.srcObject = screenStream;
        const pc = PeerConnection.getInstance();
        const sender = pc.getSenders().find(s => s.track && s.track.kind === "video");
        screenShareTrack = screenStream.getVideoTracks()[0];
        if (sender) sender.replaceTrack(screenShareTrack);
        screenShareTrack.onended = stopScreenSharing;
        isScreenSharing = true;
    } catch (error) {
        console.error("Screen share error:", error);
    }
};

const stopScreenSharing = () => {
    if (screenStream) screenStream.getTracks().forEach(t => t.stop());
    localVideo.srcObject = localStream;
    const pc = PeerConnection.getInstance();
    const sender = pc.getSenders().find(s => s.track === screenShareTrack);
    if (sender && localStream) sender.replaceTrack(localStream.getVideoTracks()[0]);
    isScreenSharing = false;
};

// ---- Start local video ----
async function startMyVideo() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true
            }
        });
        localVideo.srcObject = localStream;
    } catch (error) {
        console.error("Camera/mic error:", error);
    }
}

startMyVideo();
