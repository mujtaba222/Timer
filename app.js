// timer

var sminutes = 10;
var time = sminutes * 60;
var interval;


var countdownEl = document.getElementById('countdown')


function updateCountdown () {
    var mins = Math.floor(time / 60)
    var sec = time % 60
    
    sec = sec < 10 ? '0' + sec : sec;
    
    countdownEl.innerHTML = `${mins}: ${sec}`;
    time--;
    
}

function starttimer(){
   interval=setInterval(function(){
    updateCountdown()},1000)
   }
   
function starttimer(){
    interval= setInterval (updateCountdown, 1000)
    }
    
    function pausetimer(){
    clearInterval(interval)
  }

if (time == 0){
    alert ("Time Over")
}