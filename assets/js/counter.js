const pomodoreSelect = document.querySelector("#pomodoro");
const shortBreakSelect = document.querySelector("#shot-break");
const LongBreakSelect = document.querySelector("#long-break");
const startButton = document.querySelector("#start");
const timerParagraph = document.querySelector("#counter");

let selectedTimer = "pomodoro"; //pomodoro, shot-break, long-break

function changeSelectClasses(timer){
    if (timer === "pomodoro") {
        pomodoroSelect.classList.add("active");
        shortBreakSelect.classList.remove("actve");
        localStorage.classList.remove("active");
    }
}

function selectedTimer(timer) {
    selectedTimer = timer;

    changeSelectClasses(timer);
    changeTimerValue(timer);
}