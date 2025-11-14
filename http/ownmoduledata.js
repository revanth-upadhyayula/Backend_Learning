var http = require('http');
var dt=require('../ownmodules/datemodule.js')
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("Today Date "+dt.dateandtime(),'utf8');
    res.end();
}).listen(8080);