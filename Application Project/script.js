class User{
    constructor(userName,userEmail,userPass) {
        this.name           = userName;
        this.email          = userEmail;
        this.password       = userPass
        this.team_owner     = 0
        this.teamMembers    = [] 
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


let authentication = false


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
                authentication = true
            } else {
                alert("User-name or email already Exist")
            }
        }
    }
}
if(authentication){

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

//    console.log(`Finding in ${i}`)
   
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



let LoggedUserData = Common.getData("loggedUser")

console.log(LoggedUserData)



function toogle () {
    let blur = document.getElementById("blur")
    // console.log(blur)
    blur.classList.toggle("active")
    
    let popUp = document.getElementById("pop-up")
    // console.log(popUp)
    popUp.classList.toggle("active")
}




// "Adding Teams"



    let saveTeam = () => {
        let team = Common.getData("team")
        let addTeam

        let tName = document.getElementById("teamName").value
        let tCategory = document.getElementById("teamCategory").value
        let tMembers =  document.getElementById("teamMembers").value
    
    // Making an Object of Team

        if(tName && tCategory && tMembers){

            addTeam = new Team(tName,tCategory,tMembers);

            // console.log(addTeam)
        } else {
            alert("Please Fill the Feilds Correctly")
        } // At that point we sucessfully made an Object


    // Now see the data to update the Team

        if(team.length === 0){

            team.push(addTeam)
            Common.saveData("team" , team)

            document.getElementById("teamName").value = ""
            // document.getElementById("teamCategory").value = ""
            document.getElementById("teamMembers").value = ""

            // showData(addTeam.teamCategory , addTeam.teamMembers)

        } else{
            
            // //  now Check if the team is already Available

            if (team.find((value, index) => value.teamName === tName)){
                alert ("This Team in already available")
                return false;
            }

            team.push(addTeam)

            Common.saveData("team" , team)

            document.getElementById("teamName").value = ""
            // document.getElementById("teamCategory").value = ""
            document.getElementById("teamMembers").value = ""
            // showData(addTeam.teamCategory , addTeam.teamMembers)
        }

        toogle();
        refreshTeams();
    }

function refreshTeams(){
    let row = '';
    document.getElementById("teams").innerHTML = row;
    for (var k= 0 ; k < Common.getData('team').length; k++) {

        let dataToShow = Common.getData('team')[k];
        let showTeamCategory = dataToShow.teamCategory
        let showTeamMembers = dataToShow.teamMembers
        row += `<div> <p style="font-size: 1em; color: white;">Category : ${showTeamCategory}</p><br/> Members : ${showTeamMembers}<br/> <div style="width: fit-content; height: fit-content;"><button class="miniButton" >Add Members</button><button data-index="${k}" class="miniButton , removeTeam" onclick="removeTeam(this)">Remove Team</button></div></div> `
    }
    document.getElementById("teams").innerHTML = row;
}

// `` ""

function removeTeam(_button){
    teams = Common.getData('team');
    if (teams){
        teams.splice(_button.getAttribute('data-index'), 1);
        Common.saveData('team', teams);
        refreshTeams();
    }
}

