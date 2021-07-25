// 1st assignment

// var itemsArray = [
//     {name:"Juice",price:50, quantity:3 },
//     {name:"Cookie",price:30, quantity:9 },
//     {name:"Shirt",price:880, quantity:1 },
//     {name:"Pen",price:100, quantity:2 }];


// for (var i = 0; i < itemsArray.length; i++) {
//     console.log("The Total Price of " + itemsArray[i].quantity + " pack of " + itemsArray[i].name + " is " + itemsArray[i].price * itemsArray[i].quantity); 
// };

// let totalPrice = 0 ;

// console.log("");

// for (var i = 0; i < itemsArray.length; i++ ){
//     totalPrice += itemsArray[i].price*itemsArray[i].quantity
// };

// console.log("The total price of all items are " + totalPrice );


// 2nd Assignment

// var obj = {
//     name: "Umair",
//     email: "u@u.com",
//     password: 1234,
//     age: 19,
//     gender: "M",
//     city:"Karachi",
//     country:"Pakistan"
// }

// var findProperty = prompt("Enter any property to find");
// if (findProperty.toLowerCase() in obj) {
//     console.log("This property is exist")
// } else{
//     console.log("This Property does not exist")
// }


// 3rd Assignment

function Student(name, age, email, city) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.city = city
}

var student1 = new Student("Nadeem", 50, "Nad@gmail.com", "Khi");
var student1 = new Student("Umar", 28, "umar@hotmail.com", "Hydrabad");
var student1 = new Student("Salman", 33, "salman@yahoo.com", "Lahore");

console.log(new Student("umair",12,"asa@ld.com", "khi"));