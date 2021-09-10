class User{
    constructor(userName,userEmail,userPass) {
        this.name       = userName;
        this.email      = userEmail;
        this.password   = userPass
        this.team_owner = 0
    };
}

class Team{
    constructor(teamName,teamCategory,teamMembers){
        this.teamName = teamName ;
        this.teamCategory = teamCategory ;
        this.teamMembers = teamMembers 
    }
}

let uEmail 
let uPass
let uName


// Getting Data To Register 

let register = () => {
   let userName = document.getElementById("uName").value.toLowerCase();
   let userEmail = document.getElementById("email").value;
   let userPass = document.getElementById("pass").value;


let user

if (userName !== "" && userEmail !== "" && userPass !== ""){
    user = new User(userName.toLowerCase(),userEmail.toLowerCase(),userPass)
} else {
    alert("Please Fill all Feilds Correctly")
}


let authentefication = false


if(user){
    if(localStorage.length===0){
        Common.saveData("members",[user])
        userName =""
        userEmail =""
        userPass = ""

        window.location.href="signInPage.html" 

    } else{
        let dataBase = Common.getData("members")
        for(var j = 0 ; j < Common.getData("members").length; j++){
            if(!(userName === dataBase[j].name || dataBase[j].email === userEmail)) {
                authentefication = true
            } else {
                alert("User-name or email already Exist")
            }
        }
    }
}
if(authentefication){

       let members = Common.getData("members")
       user.team_owner += 1
       members.push(user)
       Common.saveData("members", members)
        userName =""
        userEmail =""
        userPass = "";

        window.location.href="signInPage.html"
    }

};



// Getting data to Signin

let signIn = () => {
    let signInEmail = document.getElementById("uEmail").value;
    let signInPass = document.getElementById("uPass").value;

// Now Check if the user data is already availabe in Local Storage

let data = Common.getData("members")
let eMailfound  = false
let user        = {};
for(var i = 0 ; i < data.length ; i++){

   console.log(`Finding in ${i}`)
   
    if (data[i].email === signInEmail) {
        user.email      = data[i].email
        user.password   = data[i].password
        user.name       = data[i].name
        user.team_owner = data[i].team_owner
        eMailfound = true
        break;
    } 
}

if(eMailfound){
    if(user.email === signInEmail && user.password === signInPass){
        Common.saveData('loggedUser', user);

        window.location.href="./Web/home_page.html"

    } else {
        alert ("Please enter email & password correctly")
    }
} else {
    alert("This email does not Exist")
}
}

// Now get data for home page



let wellcome = document.getElementById("wellcome");
let LoggedUserData = Common.getData("loggedUser")

let userNmae = LoggedUserData.name.toUpperCase();

wellcome = `Wellcome: ${userNmae} `

document.getElementById("wellcome").innerHTML = wellcome


function toogle () {
    let blur = document.getElementById("blur")
    // console.log(blur)
    blur.classList.toggle("active")
    
    let popUp = document.getElementById("pop-up")
    // console.log(popUp)
    popUp.classList.toggle("active")
}

let saveTeam = () => {
    let team = {}
    let tName = document.getElementById("teamName").value
    let tCategory = document.getElementById("teamCategory").value
    let tMembers =  document.getElementById("teamMembers").value

    if(tName !== "" && tCategory !== "" && tMembers !== ""){
     team = new Team(tName,tCategory,tMembers)
    } else {
        alert("Please Fill the Feilds Correctly")
    }
    console.log(teamName,teamCategory,teamMembers)

    console.log(team)

    if(team){
        Common.saveData("team" , team)
    return toogle()
}
}

// let dataOfTeam = document.getElementById("wellcome")


// let teamCategoryToShow = document.getElementById("teamCategoryToShow").innerHTML

// let teamMembersToShow = document.getElementById("teamMembersToShow").innerHTML

// let getUserData = Common.getData("team")


document.getElementById("teamCategoryToShow").innerHTML += getUserData.teamCategory
document.getElementById("teamMembersToShow").innerHTML += getUserData.teamMembers

// console.log(getUserData)
// console.log(teamMembersToShow)
console.log(teamCategoryToShow)

{/* <solid>Members : </solid> */}



