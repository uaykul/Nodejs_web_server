var express = require("express");
var app = express();
var PORT = 3000;
var middleWare={
    requireAuthentication: function(req, res, next){
        console.log("Get Route");
        next();
    },
    logger: function(req, res ,next){
        console.log(req.method + " "+ req.originalUrl);
        next();
    }
}

app.use(middleWare.logger);

app.get("/about", middleWare.requireAuthentication, function(req, res){
    res.send('ABOUT PAGE')
})
app.use(express.static(__dirname + '/public'))
app.listen(PORT ,function(){
    console.log('Server started at '+PORT);
} );
