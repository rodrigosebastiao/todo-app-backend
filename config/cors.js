module.exports = function (req, res, next){
    // * = qualquer origin
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE");
    res.header("Access-Control-Allow-Origin", "Origin, X-Request-With, Content-Type, Accept");
    // Next permite ir para o próximo middleware ou request
    next();
}