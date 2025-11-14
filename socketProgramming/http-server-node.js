const http=require('http')

const server=http.createServer((req,res)=>{
    console.log("New connection")
    if(req.url==='/home')
        res.end("Welcome home")
    else
        res.end("returned from home")
})

server.listen(3000,()=>{
    console.log("Server esthablished on port 3000")
})