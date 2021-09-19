const firebaseConfig = {
    apiKey: "AIzaSyDQM3ZXtB4IsMrwUbeXutdDF2PvV2qhDAo",
    authDomain: "pop-a-balloon-game.firebaseapp.com",
    projectId: "pop-a-balloon-game",
    storageBucket: "pop-a-balloon-game.appspot.com",
    messagingSenderId: "485644457916",
    appId: "1:485644457916:web:10dd64476acb115ce63db9",
    measurementId: "G-TQ8N4XD7E6"
  };
           // Initializing Firebase
      
    firebase.initializeApp(firebaseConfig);


   const auth = firebase.auth();
//    var database = firebase.database();

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in Sucessful 
            var LoggedUser = userCredential.user;
            
            window.location.href= "./wellcome_page.html"

            // document.getElementById('user').innerHTML = email

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}


function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



 auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in Sucessful
            const user = userCredential.user;
            
            window.location.href= "./wellcome_page.html"
            // document.getElementById('user').innerHTML = email
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            alert(errorMessage);
        });
}

function logout() {


    firebase.auth().signOut().then(() => {
        
        window.location.href= "./index.html"
    }).catch((error) => {
        // An error happened.
    });
}


onload = function(){
    var parent = document.getElementById("shuffle");
    var frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}

setInterval( onload() , 3000);
