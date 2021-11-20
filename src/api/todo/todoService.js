const Todo = require("./todo");

Todo.methods(["get", "post", "put", "delete"]);

//updateOptions new retorna o resultado modificado ao invés do antigo; validators referente a ao Schema
Todo.updateOptions({new: true, runValidators: true});


module.exports = Todo;