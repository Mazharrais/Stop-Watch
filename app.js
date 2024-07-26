
let displayTime = document.getElementById("displayTime");


let [seconds, minutes, hours] = [0,0,0];

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
}

setInterval(stopWatch,1000)