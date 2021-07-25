// "2nd Assignment"

var obj = {
    name: "Umair",
    email: "u@u.com",
    password: 1234,
    age: 19,
    gender: "M",
    city:"Karachi",
    country:"Pakistan"
}

var findProperty = prompt("Enter any property to find");
if (findProperty.toLowerCase() in obj) {
    console.log("This property is exist")
} else{
    console.log("This Property does not exist")
}