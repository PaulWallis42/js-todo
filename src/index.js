window.onload = function(){

  var todo = new Todo();
  displayTodos();

  function displayTodos(){
    var todoList = document.getElementById('todo');
    while (todoList.hasChildNodes()){
      todoList.removeChild(todoList.firstChild);
    }
    todo.todoItems.forEach(function(item){
      var newLi = document.createElement('li');
      newLi.innerText = item;
      todoList.appendChild(newLi);
    });
  }

  document.getElementById('main-form').onsubmit = function(evt){
    evt.preventDefault();
    var item = document.getElementById('new-todo').value;
    todo.addItem(item);
    document.getElementById('main-form').reset();
    displayTodos();
  }


}
