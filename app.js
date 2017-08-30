console.log("Lets Go!")
let d = document; //easy pure JS
let miliYear = 31536000000


function Agegate(){
    event.preventDefault() 
    ///Get Some dates values. Parse Int to get integer or return NaN
    let userMonth = d.getElementById("month").value;
        console.log("This is the month input " + userMonth)
    let userDay = d.getElementById("day").value;
    let userYear = d.getElementById("year").value;

    //Get Users Inputs
    let bday = userMonth + "/" + userDay + "/" + userYear;
    let bdayTime = new Date(bday).getTime();
    console.log("Users Milis are "+bdayTime)

    //Define Todays Date
    let now = new Date().getTime()
    console.log("Today's milis are "+now)

    //Subtract
    let userThisOld = Math.floor((now - bdayTime) / 31536000000)   //Subtract Todays Milis - User Bday Milis and divide by total Milis in one year
    console.log("The user is " + userThisOld +" years old")
    
    //Edge Cases
    if(userThisOld>100){ return alert("Come on, man.  you're not older than 100 years old")}
    if (userThisOld < 1) { return  alert("That can't be your age. Pls try again.") }
    if (Number.isNaN(userThisOld)) { return alert("Sorry Numbers Only.  Pls type your birthday.")}
    if (userYear.length<4) { return alert("Pls Retype The Year") }
}

//Need to do web storage next
if (typeof (Storage) !== "undefined") {
    localStorage.setItem("lastName", "Sanders")

} else {
    alert("Sorry, no web support")
}

let ln = localStorage.getItem("lastName")
console.log(ln)


    console.log( "ready!" );
    $("input").keypress(function(e) {
        if (e.which > 57 || e.which > 145 || e.which === 16 ) { // 'w'
          e.preventDefault();
        }
      });
    
     

