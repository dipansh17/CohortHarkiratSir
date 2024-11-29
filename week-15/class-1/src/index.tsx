import { WebSocket, WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8080})

//event handler
wss.on("connection",function(socket){
    console.log("user connected");
    // setInterval(function(){
    //     socket.send("hello "+Math.random())
    // },5000)
    socket.on("message",function(e){
        console.log(e.toString());
        if(e.toString()==='ping'){
            socket.send("Pong.....  ........")
        }
    })
    // socket.send("something")

})
// console.log("hi")