function init() {
  var reset = document.getElementById("reset");
  var pause = document.getElementById("pause");
  var start = document.getElementById("start");
  var timerId = document.getElementById("timer");
  var gintervalId = 0;
  var gseconds = 0;

  start.addEventListener("click", startTimer, false);
  pause.addEventListener("click", pauseTimer, false);
  reset.addEventListener("click", resetTimer, false);


  function startTimer () {
    console.log("timer start")
    if (gintervalId === 0){
    gintervalId = window.setInterval(updateTime, 1000)
    }

  }

  function pauseTimer() {
    console.log("timer pause")
    clearInterval(gintervalId);
    gintervalId = 0;
  }

  function updateTime() {
    console.log("timer update")
    gseconds = gseconds + 1;
    timerId.textContent = gseconds;
  }

  function resetTimer() {
      console.log("timer resets")
      if(gintervalId !== 0) {
      pauseTimer();
    }
      else if (gintervalId === 0) {
        gseconds = 0;
        timerId.textContent = "Stop Watch";
    }

  }






}
window.addEventListener("load",init,false);
