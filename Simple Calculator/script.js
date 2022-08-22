
function calc(a) {
    console.log(a)

    var screen = document.getElementById('screen')
    screen.value += a  
}

function clr() {
    var screen = document.getElementById('screen')
    screen.value = ""
}

function equal(){ 

    var screen = document.getElementById('screen')
    console.log(eval(screen.value))
    var total =  eval(screen.value)
    screen.value = total

}

function back(){
    var screen = document.getElementById('screen')
    console.log(screen.value)
    

}


