const net = require('net');

const server=net.createServer((socket)=>{
    socket.on('data',(clientdata)=>{
        console.log("Client connected")
        console.log("Data recieved from client",clientdata.toString())
        socket.write("recieved on server thanks")
    })
})

server.listen(8080,()=>{
    console.log("New server on port 8080")
})