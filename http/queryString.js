var http = require('http');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    var u = url.parse(req.url,true).query;
    var text = u.year+" "+u.month;
    res.end(text);
}).listen(8081)