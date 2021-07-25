"1st assignment"

var itemsArray = [
    {name:"Juice",price:50, quantity:3 },
    {name:"Cookie",price:30, quantity:9 },
    {name:"Shirt",price:880, quantity:1 },
    {name:"Pen",price:100, quantity:2 }];


for (var i = 0; i < itemsArray.length; i++) {
    console.log("The Total Price of " + itemsArray[i].quantity + " pack of " + itemsArray[i].name + " is " + itemsArray[i].price * itemsArray[i].quantity); 
};

let totalPrice = 0 ;

console.log("");

for (var i = 0; i < itemsArray.length; i++ ){
    totalPrice += itemsArray[i].price*itemsArray[i].quantity
};

console.log("The total price of all items are " + totalPrice );
