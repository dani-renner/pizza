function Pizza (size) {
  this.size = size;
  this.toppings = [];
}
Pizza.prototype.countToppings = function() {
  return this.toppings.length;
}
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=size]:checked").val();
    const inputtedToppings = [];
    $("input:checkbox[name=toppings]:checked").map(function(){
      inputtedToppings.push($(this).val());
    });
    let userPizza = new Pizza(inputtedSize);
    userPizza.toppings = inputtedToppings;
    console.log(userPizza.countToppings());
    });
    
  });