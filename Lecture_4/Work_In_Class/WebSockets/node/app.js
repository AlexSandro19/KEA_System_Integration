import express from "express";
import http from "http"
import {Server} from "socket.io"
const app = express()
const server = http.createServer(app)
const io = new Server(server)
app.use(express.static("public"))

io.on("connection", (socket) => {
    console.log('socket', socket)
    
    socket.on("ping", (data) => {
        socket.emit("pong", data);
    })
    
    socket.on("name_request", (data) => {
        if (data.toLowerCase() == "alex"){
            const response = `${data} is a nice name`
            socket.emit("name_response", response);
        }else{
            socket.emit("name_response", "Should've picked another name");
        }
    })
})





server.listen(8080, () => {
    console.log("Server is running on port ", 8080);
})
