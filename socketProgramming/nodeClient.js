const net=require('net')

const client=net.createConnection({port:8080},()=>{
    console.log("Client connected to server");
    client.write("hello from node client");
})

client.on('data',(data)=>{
    console.log("recieved data from server : ",data.toString())
})