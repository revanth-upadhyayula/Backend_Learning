const TodoServices = require('../services/todo.services');
const TodoRepository = require('../repositories/todo.repository');

const todo= new TodoServices(new TodoRepository());

function getTodos(req,res)
{
    const response = todo.getAllTodos();
    return res.json({response});
}
function createTodos(req,res)
{
    const todoData=req.body.todo;
    console.log(todoData);
    todo.createTodo(todoData);
    return res.json({data:"todo created successfully"});
}

module.exports={getTodos,createTodos}