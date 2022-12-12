// const { Server } = require("ws");

// const socket = new Server({port: 4000})
// const message = []

// socket.on("connection", (ws) => {
//     console.log(`userId connect`);

//     ws.on("message", (data) => {
//         const message = data.toString();
//         console.log("message", message);
//         socket.clients.forEach(client => client.send(message))
//     })

// })

// console.log("Server start");

const express = require("express")
const { createServer } = require("http")
const { Server } = require("socket.io");
const cors = require("cors")
const session = require("express-session");

const app = express()
const server = createServer(app)
const io = new Server(server, {
    cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

app.use(cors())

io.on("connection", (socket) => {
    console.log(`User connection`);

    socket.on("disconect", () => {
        console.log(`User disconect`);
    })

    socket.on("message", (msg) => {
        console.log("message", msg);
        io.emit("message", msg)
    })
})

server.listen(4000, () => {
    console.log("start server");
})