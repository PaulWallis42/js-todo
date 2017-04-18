function Todo(){
  this.items = [];
}

Todo.prototype.addItem = function (item) {
  this.items.push(item);
};
