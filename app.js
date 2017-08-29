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
    console.log(userMonth)
    let userDay = d.getElementById("day").value;
    console.log(userDay)
    let userYear = d.getElementById("year").value;
    console.log(userYear)

    //Get Users Inouts
    let bday = userMonth + "/" + userDay + "/" + userYear;
    let bdayTime = new Date(bday).getTime();
    console.log("Users Milis are "+bdayTime)

    //Define todays Date
    let now = new Date().getTime()
    console.log("Today's milis are "+now)

    //Subtract
    let diff = (now - bdayTime) / 31536000000   //Subtract Todays Milis - User Bday Milis and divide by total Milis in one year
    console.log(diff)
    
}





//Get Month number, Get Day Number , get year huber
//