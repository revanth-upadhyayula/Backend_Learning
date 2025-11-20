class TodoServices{

    constructor(todoRepository){
        this.todoRepository=todoRepository;

    }
    createTodo(todo){

        // ? Business Logic if wanted

        todo=todo.trim().toUpperCase();

        this.todoRepository.insert(todo);
    }

    getAllTodos(){
        return this.todoRepository.getAll();
    }

    getTodo(id){
        return this.todoRepository.get(id);
    }
}

module.exports=TodoServices;