function Pizza (size, toppings) {
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
    const inputtedToppings = [];
    $("input:checkbox[name=toppings]:checked").map(function(){
      inputtedToppings.push($(this).val());
    });
    console.log(inputtedToppings);
    let userPizza = new Pizza(inputtedSize,inputtedToppings);
    console.log(userPizza.toppings);
    });
    
  });