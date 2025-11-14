var http = require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/text'});
    res.write(" Good Morning!!");
    res.end();
}).listen(8080);