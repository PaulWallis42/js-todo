describe('Todo', function(){

  var todo;

  beforeEach(function(){
    todo = new Todo();
  });

  it('can store todo items', function(){
    expect(todo.items).toEqual([]);
  });

  it('todo items can be added to storage', function(){
    todo.addItem('Walk Dog');
    expect(todo.items[0]).toEqual('Walk Dog');
  });

});
