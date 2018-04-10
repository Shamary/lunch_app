var bcrypt=require("bcrypt");
var http=require("http");

http.createServer(function(req,res){
    var salt=bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("1234", salt);
    res.write("200");
    res.end();
    console.log("hash");
}).listen(8080);