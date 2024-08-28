let startTime, updatedTime, difference, tInterval;
let running = false;
let lapNumber = 1;
let lapList = document.getElementById('lapList');

const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    stopwatchDisplay.innerText = `${hours}:${minutes}:${seconds}`;
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    stopwatchDisplay.innerText = "00:00:00";
    lapList.innerHTML = '';
    lapNumber = 1;
    running = false;
}

function recordLap() {
    if (running) {
        let lapTime = stopwatchDisplay.innerText;
        let lapItem = document.createElement('li');
        lapItem.innerText = `Lap ${lapNumber}: ${lapTime}`;
        lapList.appendChild(lapItem);
        lapNumber++;
    }
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);
