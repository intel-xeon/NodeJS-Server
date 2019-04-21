var http = require('http');
var port = 8080;
var server = http.createServer((req,res)=>{
res.end("Hello World!");
});
try {
    server.listen(port,function(){
        return console.log("server listen in port "+port);
    })    
} catch (error) {
    return console.log("Error server: "+error);
}

