function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
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
Pizza.prototype.printToppings = function() {
  for (i = 0; i < this.toppings.length; i++){
    $("#userToppings").text(" "+this.toppings);
  };
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