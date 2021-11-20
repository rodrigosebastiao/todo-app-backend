const PORT = process.env.PORT || 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowCors = require("./cors");

//Process DATA Support + Submit Forms
server.use(bodyParser.urlencoded({extended: true}));
//Process JSON in every request
server.use(bodyParser.json());
server.use(allowCors);

server.listen(PORT, ()=>{
    console.log("Listening to port", PORT);
});

module.exports = server;