window.onload = function(){

  var todo = new Todo();
  displayTodos();
  displayCompleted();

  // iterate through todos and append to <ul> todo list
  function displayTodos(){
    var list = document.getElementById('todo');
    removeChildren(list);
    todo.todoItems.forEach(function(item){
      createChildren(item, list);
    });
  }

  // iterate through completed list and append to completed <ul>
  function displayCompleted(){
    var list = document.getElementById('completed');
    removeChildren(list);
    todo.completedItems.forEach(function(item){
      createChildren(item, list);
    });
  }

  // add new todos to todo array
  document.getElementById('main-form').onsubmit = function(evt){
    evt.preventDefault();
    var item = document.getElementById('new-todo').value;
    todo.addItem(item);
    document.getElementById('main-form').reset();
    displayTodos();
  }

  // remove all <li> before outputting to DOM
  function removeChildren(list){
    while (list.hasChildNodes()){
      list.removeChild(list.firstChild);
    }
  }

  // create Children
  function createChildren(item, list){
      var newLi = document.createElement('li');
      newLi.innerText = item;
      list.appendChild(newLi);
  }

  // when item clicked remove from todo list and put in completed list and update view
  var todoList = document.getElementById('todo')
  todoList.addEventListener('click', function(e){
    todo.removeItem(e.path[0].innerText);
    displayTodos();
    displayCompleted();
  });








}
