function Todo(){
  this.todoItems = [];
  this.completedItems = [];
}

Todo.prototype.addItem = function(item) {
  this.todoItems.push(item);
}

Todo.prototype.removeItem = function(item){
  var index = this.todoItems.indexOf(item);
  if (index >= 0){
    var removed = this.todoItems.splice(index, 1);
  }
  this.completedItems.push(removed[0]);
}
