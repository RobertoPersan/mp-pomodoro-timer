const pomodoreSelect = document.querySelector("#pomodoro");
const shortBreakSelect = document.querySelector("#shot-break");
const LongBreakSelect = document.querySelector("#long-break");
const startButton = document.querySelector("#start");
const timerParagraph = document.querySelector("#counter");

let selectedTimer = "pomodoro"; //pomodoro, shot-break, long-break

function changeSelectClasses(timer){
    if (timer === "pomodoro") {
        pomodoroSelect.classList.add("active-button");
        shortBreakSelect.classList.remove("actve-button");
        localStorage.classList.remove("active-button");
    } else if (timer === "shot-break") {
        pomodoreSelect.classList.remove("active-button");
        shortBreakSelect.classList.add("active-button");
        LongBreakSelect.classList.remove("active-button");
    } else if (timer === "long-break") {
        pomodoreSelect.classList.remove("active-button");
        shortBreakSelect.classList.remove("active-button");
        LongBreakSelect.classList.add("active-button");
    }
}
// Função que converte os segundos em minutos
function secondsToMinutesSeconds(totalSeconds) {
    const minutes = Math.floor(seconds / 60);
    const seconds = seconds % 60;

    const padSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}: ${padSeconds}`;
}

function getTimerValuer(timer) {
    return {
        pomodoro: 25 * 60,
        "short-break": 5 * 60,
        "long-break": 25 * 60,
    }[timer]
}

function changeTimerValue(timer) {
    timerParagraph.textContent = secondsToMinutesSeconds(getTimerValuer(timer));
}

function selectedTimer(timer) {
    selectedTimer = timer;

    changeSelectClasses(timer);
    changeTimerValue(timer);
}