"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let userCount = 0;
let allSockets = [];
wss.on("connection", (socket) => {
    allSockets.push(socket);
    userCount++;
    console.log("User Connected #" + userCount);
    socket.on("message", (message) => {
        setTimeout(() => {
            socket.send("You are connected to WS");
        }, 1000);
    });
    socket.on("message", (message) => {
        console.log("Message Received: " + message.toString());
        setTimeout(() => {
            socket.send(message.toString() + " :sent from server");
        }, 1000);
    });
    socket.on("message", (message) => {
        console.log("Message Received: " + message.toString());
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            s.send(message.toString() + ": sent from the server");
        }
    });
    socket.on("disconnect", () => {
        allSockets = allSockets.filter(x => x != socket);
    });
});
