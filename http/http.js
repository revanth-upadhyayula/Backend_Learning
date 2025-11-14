var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/text'});
    res.write("Hello World!");
    // res.write(req.url)
    res.end();
}).listen(8081);