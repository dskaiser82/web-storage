console.log("Lets Go!")
let d = document; //easy pure JS
let miliYear = 31536000000

if(typeof(Storage) !== "undefined"){
    localStorage.setItem("lastName", "Sanders")

} else {
    alert("Sorry, no web support")
}

let ln = localStorage.getItem("lastName")
console.log(ln)

///Get Some dates values
function getInputs(){
    event.preventDefault()
    let userMonth = d.getElementById("month").value;
    let userDay = d.getElementById("day").value;
    let userYear = d.getElementById("year").value;

    //Get Users Inputs
    let bday = userMonth + "/" + userDay + "/" + userYear;
    let bdayTime = new Date(bday).getTime();
    console.log("Users Milis are "+bdayTime)

    //Define todays Date
    let now = new Date().getTime()
    console.log("Today's milis are "+now)

    //Subtract
    let userThisOld = Math.floor((now - bdayTime) / 31536000000)   //Subtract Todays Milis - User Bday Milis and divide by total Milis in one year
    console.log("The user is " + userThisOld +" years old")
    
}





//Get Month number, Get Day Number , get year huber
//