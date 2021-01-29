function Pizza (size) {
  this.size = size;
  this.toppings = [];
}
Pizza.prototype.countToppings = function() {
  return Object.keys().length;
}
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=size]:checked").val();
    const inputtedToppings = $("input:checkbox[name=toppings]:checked").toArray();
    let userPizza = new Pizza(inputtedSize,inputtedToppings);
    console.log(userPizza.toppings);
    });
    
  });