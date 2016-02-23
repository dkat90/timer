function init() {
  var reset = document.getElementById("reset");
  var pause = document.getElementById("pause");
  var start = document.getElementById("start");

  start.addEventListener("click", startTimer, false);
  pause.addEventListener("click", pauseTimer, false);
  // reset.addEventListener("click", "" false);

  var gseconds = 0;
  var timerId = document.getElementById("timer");
  var gintervalId = 0;

  function startTimer () {
    if (gintervalId === 0){
    gintervalId = window.setInterval(updateTime, 1000)
    }
  }

  function pauseTimer() {
    clearInterval(gintervalId);
    gintervalId = 0;
  }

  function updateTime() {
    gseconds = gseconds + 1;
    timerId.textContent = gseconds;
  }

  







}
window.addEventListener("load",init,false);
