
let addUser = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value));
}
let getData = (key) => JSON.parse(localStorage.getItem(key))


function User(userName,userEmail,userPass) {
    this.name = userName;
    this.email = userEmail;
    this.password = userPass
};

let uEmail 
let uPass
let uName


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


};



// Getting data to Signin

let signIn = () => {
    let signInEmail = document.getElementById("uEmail").value;
    let signInPass = document.getElementById("uPass").value;

// Now Check if the user data is already availabe in Local Storage

let data = getData("members")
let eMailfound = false
for(var i = 0 ; i < data.length ; i++){

   console.log(`Finding in ${i}`)
   
    if (data[i].email === signInEmail) {
        uEmail = data[i].email
        uPass = data[i].password
        uName = data[i].name

        eMailfound = true
        break;
    } 
}

if(eMailfound){
    if(uEmail === signInEmail && uPass === signInPass){
        window.location.href="./Web/home_page.html"
        let wellcome = document.getElementById("wellcome")
        wellcome.innerHTML = `Wellcome: ${uName}`
        console.log(uName)    

    } else {
        alert ("Please enter email & password correctly")
    }
} else{
    alert("This email does not Exist")
}
}
