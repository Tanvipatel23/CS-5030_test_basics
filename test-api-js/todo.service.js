class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todos.todo.push(todo);
        return this.todos;
    }

    delete_todo(id){
        // Your code here
        this.todos.todo.splice(id,2)
        return this.todos;
    }

    update_todo(id, todo){
        // Your code here
        this.todos.todo[id] = todo;
        return this.todos;
    }
}


module.exports= todoservice;
