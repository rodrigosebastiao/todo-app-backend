const express = require("express");

module.exports	= function(server){
    // API Routes
    const router = express.Router();
    server.use("/api", router);

    // Mapeamento Todo Routes
    const todoService = require("../src/api/todo/todoService");
    todoService.register(router, "/todos");
}