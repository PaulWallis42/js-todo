describe('Todo', function(){

  it('can store todo items', function(){
    var todo = new Todo();
    expect(todo.todos).toEqual([]);
  });


});
