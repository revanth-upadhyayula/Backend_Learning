const todo=[];

class TodoRepository{

    insert(todos){
        todo.push({id:todo.length,text: todos})
    }

    getAll()
    {
        return todo;
    }

    get(id){
        return todo.filter((t)=>t.id==id)[0];
    }
}

module.exports=TodoRepository;