let leaveTime = "12:00";
let minutesLeft = "30 Minuten";
const date = new Date();
date.getHours()
leaveTime = date.getHours() + ":" + date.getMinutes()
setInterval(changeDisplay, 5000)
function changeDisplay(){
    if (document.getElementById("timeLeft").innerHTML == leaveTime){
        document.getElementById("timeLeft").innerHTML = minutesLeft
    } else{
        document.getElementById("timeLeft").innerHTML = leaveTime
    }


}