// function getDOB(value){
//     console.log(new Date(value))
// }

let daysGiven = document.getElementById("date");
let monthGiven = document.getElementById("month");
let yearGiven = document.getElementById("year");

let showAge = document.getElementById("show-age");

let btn = document.getElementById("calc");

var today = new Date();

let d = today.getDate();
let m = today.getMonth()+1; 
let y = today.getFullYear();

let maxDays = 0
let monthNum = 0

btn.addEventListener("click", (days,month,year) => {
    days = daysGiven.Value
    month = monthGiven.Value
    year = yearGiven.Value

    if (daysGiven.value === "" || monthGiven.value === "" || yearGiven.value === "" ){
        return alert("Please Enter Your Date of Birth Properly")
    }

    console.log(`Current Date : ${days} ${month} ${year}` );

    // if (m === 1){
    //     maxDays = 31 ;
    //     monthNum = 1 ;
    // } 
    // else if (m === 2){
    //     maxDays = 28 ;
    //     monthNum = 2 ;
    // }
    // else if (m === 3){
    //     maxDays = 31 ;
    //     monthNum = 3 ;
    // }
    // else if (m === 4){
    //     maxDays = 30 ;
    //     monthNum = 4 ;
    // }
    // else if (m === 5){
    //     maxDays = 31 ;
    //     monthNum = 5 ;
    // }

    // else if (m === 6){
    //     maxDays = 30 ;
    //     monthNum = 6 ;
    // }

    // else if (m === 7){
    //     maxDays = 31 ;
    //     monthNum = 7 ;
    // }

    // else if (m === 8){
    //     maxDays = 31 ;
    //     monthNum = 8 ;
    // }

    // else if (m === 9){
    //     maxDays = 30 ;
    //     monthNum = 9 ;
    // }

    // else if (m === 10){
    //     maxDays = 31 ;
    //     monthNum = 10 ;
    // }

    // else if (m === 11){
    //     maxDays = 30 ;
    //     monthNum = 11 ;
    // }

    // else if (m === 12){
    //     maxDays = 31 ;
    //     monthNum = 12 ;
    // }

    var ageYear = y - year;

    if(m <= month){
        m = m + 12;
    }

    var ageMonth = m - month;

    var ageDay = (maxDays - d) + parseInt(days);

    console.log(`You Are ${ageYear}, ${ageMonth}Month & ${ageDay} Days Old`)
})