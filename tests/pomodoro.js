var pomodoroIntervalId;

function startTimer(duration) {
  timer = duration;
  pomodoroIntervalId = setInterval(function() {
    if (--timer < 0) {
      timer = duration;
    }

    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(minutes + ":" + seconds);

    if (minutes == 0 && seconds == 0) {
      console.log("NOTI!");
    }
  }, 1000);
}

startTimer(100);
