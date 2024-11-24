import { WebSocketServer,WebSocket } from "ws";

const wss=new WebSocketServer({port:8080});

let userCount:number=0;
let allSockets:WebSocket[]=[];
wss.on("connection",(socket)=>{
    allSockets.push(socket);
    userCount++;
    console.log("User Connected #" +userCount);
    // socket.on("message",(message)=>{
    //     setTimeout(() => {
    //         socket.send("You are connected to WS")    
    //     }, 1000);
    // })

    socket.on("message",(message)=>{
        console.log("Message Received: "+message.toString());
        setTimeout(() => {
            socket.send(message.toString()+" :sent from server")    
        }, 1000);
        
    })
    socket.on("message",(message)=>{
        console.log("Message Received: "+message.toString());
        for(let i=0;i<allSockets.length;i++){
            const s=allSockets[i];
            s.send(message.toString()+": sent from the server");
        }
    })
    socket.on("disconnect",()=>{
        allSockets=allSockets.filter(x=>x!=socket);
    })
})
