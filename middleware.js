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
module.exports = middleWare;