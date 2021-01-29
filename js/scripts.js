
function Orders() {
  this.pizzas = {};
  this.currentID = 0;
};
Orders.prototype.addPizza = function(pizza) {
  pizza.id = this.assignID();
  this.pizzas[pizza.id] = pizza;
};
Orders.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
};

function Pizza (size) {
  this.size = size;
  this.toppings = [];
};
Pizza.prototype.countToppings = function() {
  return this.toppings.length;
};
Pizza.prototype.costCalc = function() {
  let total = 5;
  if (this.size === "medium"){
    total += 2
  }
  else if (this.size === "large"){
    total += 4;
  }
  else {};
  for (i = 0; i < this.toppings.length; i++){
    total += 1;
  }
    return total;
};
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
    $(".output").show();
    $("#userCost").text(" $"+userPizza.costCalc());
    });    
  });