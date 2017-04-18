describe('Todo', function(){

  var todo;

  beforeEach(function(){
    todo = new Todo();
  });

  it('can store todo items', function(){
    expect(todo.todoItems).toEqual([]);
  });

  it('can add items to todos', function(){
    todo.addItem('Walk Dog');
    expect(todo.todoItems[0]).toEqual('Walk Dog');
  });

  it('can remove specific items from todos', function(){
    todo.addItem('Walk Dog');
    todo.addItem('Do Laundry');
    todo.removeItem('Walk Dog')
    expect(todo.todoItems.length).toEqual(1);
    expect(todo.todoItems[0]).toEqual('Do Laundry');
  });

  it('adds removed items to the completed list', function(){
    todo.addItem('Walk Dog');
    todo.removeItem('Walk Dog');
    expect(todo.completedItems[0]).toEqual('Walk Dog');
  });

});
