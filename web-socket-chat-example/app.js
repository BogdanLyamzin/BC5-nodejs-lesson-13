const WebSocket = new require("ws");

const socket = new WebSocket.Server({port: 5000});

const users = [];

socket.on("connection", (user)=>{
    const index = users.push(user) - 1;

    user.on("message", (message)=> {
        users.forEach((user, idx)=>{
            if(idx !== index){
                user.send(message);
            }
        })
    });
})

// user1
/*
user1.on("message", (message)=> {
        users.forEach((user, idx)=>{
            if(idx !== index){
                user.send(message);
            }
        })
    })
*/
// [user1, ]