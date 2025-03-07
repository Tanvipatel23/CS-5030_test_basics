

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();
    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
  

    var id = 1;

    var new_id = 3;


    test("add_todos", () => {
        expect(todo_service.add_todo({
            tittle: "task4",
            description: "description-4",
            done: false
        }).todo.length).toEqual(4);
    });

    test("delete_todos", () => {
        expect(todo_service.delete_todo(id).todo.length).toEqual(2);
    });
    test("update_todo", () => {
        expect(todo_service.update_todo(new_id,
            {tittle: "task5",
             description: "bring milk from shop",
             done: false})
             .todo[3]).toEqual({
            tittle: "task5",
            description: "bring milk from shop",
            done: false
        });
      });

});
