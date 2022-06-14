var express = require("express");
var middleWare = require("./middleware")
var app = express();
var PORT = 3000;


app.use(middleWare.logger);

app.get("/about", middleWare.requireAuthentication, function(req, res){
    res.send('ABOUT PAGE')
})
app.use(express.static(__dirname + '/public'))
app.listen(PORT ,function(){
    console.log('Server started at '+PORT);
} );
