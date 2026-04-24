import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const server = createServer(app);
const io = new Server(server);

// Map: username -> { username, id }
const allusers = {};

// Reverse map: socket.id -> username  (needed for disconnect cleanup)
const socketToUser = {};

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));

app.get("/",      (req, res) => res.sendFile(join(__dirname, "app/home.html")));
app.get("/page1", (req, res) => res.sendFile(join(__dirname, "app/index.html")));
app.get("/about", (req, res) => res.sendFile(join(__dirname, "app/about.html")));
app.get("/page2", (req, res) => res.sendFile(join(__dirname, "app/videoUpload.html")));
app.get("/page3", (req, res) => res.sendFile(join(__dirname, "app/page3.html")));

io.on("connection", (socket) => {

    // ── Join ──────────────────────────────────────────────────────
    socket.on("join-user", (username) => {
        // If this username was already registered (same user, new socket after
        // refresh), remove the old entry first so the list stays clean
        if (allusers[username]) {
            const oldId = allusers[username].id;
            delete socketToUser[oldId];
        }

        allusers[username] = { username, id: socket.id };
        socketToUser[socket.id] = username;

        io.emit("joined", allusers);
    });

    // ── Explicit leave (beforeunload) ─────────────────────────────
    socket.on("leave-user", (username) => {
        removeUser(username, socket.id);
        io.emit("joined", allusers);
    });

    // ── WebRTC signalling ─────────────────────────────────────────
    socket.on("offer", ({ from, to, offer }) => {
        if (allusers[to]) {
            io.to(allusers[to].id).emit("offer", { from, to, offer });
        }
    });

    socket.on("answer", ({ from, to, answer }) => {
        if (allusers[from]) {
            io.to(allusers[from].id).emit("answer", { from, to, answer });
        }
    });

    socket.on("end-call", ({ from, to }) => {
        if (allusers[to]) {
            io.to(allusers[to].id).emit("end-call", { from, to });
        }
    });

    socket.on("call-ended", (caller) => {
        const [from, to] = caller;
        if (allusers[from]) io.to(allusers[from].id).emit("call-ended", caller);
        if (allusers[to])   io.to(allusers[to].id).emit("call-ended", caller);
    });

    socket.on("icecandidate", (candidate) => {
        socket.broadcast.emit("icecandidate", candidate);
    });

    socket.on("caption-update", (data) => {
        socket.broadcast.emit("caption-update", data);
    });

    socket.on("caption-source-change", (data) => {
        socket.broadcast.emit("caption-source-change", data);
    });

    // ── Disconnect (tab closed, network drop, refresh without beforeunload) ──
    socket.on("disconnect", () => {
        const username = socketToUser[socket.id];
        if (username) {
            removeUser(username, socket.id);
            io.emit("joined", allusers);   // push updated list to everyone
        }
    });
});

function removeUser(username, socketId) {
    // Only remove if the stored socket ID matches (prevents removing a user
    // who has already rejoined with a new socket)
    if (allusers[username] && allusers[username].id === socketId) {
        delete allusers[username];
    }
    delete socketToUser[socketId];
}

server.listen(9000, () => {
    console.log("Server running on port 9000");
});
