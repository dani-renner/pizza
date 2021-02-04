function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 5;
};

Pizza.prototype.costCalc = function() {
  if (this.size === "medium"){
    this.price += 2
  }
  else if (this.size === "large"){
    this.price += 4;
  }
  for (i = 0; i < this.toppings.length; i++){
    this.price += 1;
  }
    return this.price;
};

Pizza.prototype.printToppings = function() {
  $("#userToppings").text(" "+this.toppings.join(", "));
};

$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    let inputtedSize = $("input:radio[name=size]:checked").val();
    let inputtedToppings = $("input:checkbox[name=toppings]:checked").map(function(){
      return this.value;
    }).get();
    let userPizza = new Pizza(inputtedSize, inputtedToppings);
    $(".output").show();
    $("#userSize").text(" "+userPizza.size);
    userPizza.printToppings();
    $("#userCost").text(" $"+userPizza.costCalc());
    });    
  });