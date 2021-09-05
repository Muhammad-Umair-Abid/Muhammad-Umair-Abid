
let addUser = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));
}
let getData = (key) => JSON.parse(localStorage.getItem(key))


function User(userName,userEmail,userPass) {
    this.name = userName;
    this.email = userEmail;
    this.password = userPass
};


// Getting Data To Register 

let register = () => {
   var userName = document.getElementById("uName").value;
   var userEmail = document.getElementById("email").value;
   var userPass = document.getElementById("pass").value;

let user = new User(userName.toLowerCase(),userEmail.toLowerCase(),userPass)


if(localStorage.length===0){
    addUser("members",[user])
} else {
   let members = getData("members")
   members.push(user)
addUser("members", members)
}

window.location.href="signInPage.html"
var uName = getData("members")[0].name

};



// Getting data to Signin

let signIn = () => {
    let signInEmail = document.getElementById("uEmail").value;
    let signInPass = document.getElementById("uPass").value;


// Now Check if the signin data is availabe 

let uEmail = getData("members")[0].email
let uPass = getData("members")[0].password


if(signInEmail === uEmail && signInPass === uPass){
    window.location.href="./Web/home_page.html"
} else {
    alert("Please Enter email & password Correctly")
}
}

let uEmail = getData("members")[0].email
let uPass = getData("members")[0].password
let uName = getData("members")[0].name


let wellcome = document.getElementById("wellcome")
wellcome.innerHTML = `Wellcome: ${uName}` 

