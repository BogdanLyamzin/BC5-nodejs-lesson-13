const WebSocket = new require("ws");

const socket = new WebSocket.Server({port: 5000});

socket.on("connection", (client)=>{
    // console.log("Новое соединение установлено!");
    client.send("Привет от бекенда!");

    client.on("message", (message)=> {
        console.log(message);
    })
});