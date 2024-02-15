const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

const startTime = Date.now();
const endTime = startTime + 10 * 60 * 1000;

function updateCountdown() {
    const currentTime = Date.now();
    const remainingTime = endTime - currentTime;

    if (remainingTime >= 0) {
        const remainingMinutes = Math.floor(remainingTime / 1000 / 60);
        const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
        const remainingMilliseconds = Math.floor((remainingTime % 1000) / 10); 

        minutes.innerHTML = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
        seconds.innerHTML = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
        milliseconds.innerHTML = remainingMilliseconds < 10 ? '0' + remainingMilliseconds : remainingMilliseconds;
    } else {
        clearInterval(interval);
        alert("Countdown has finished!");
    }
}

updateCountdown();

const interval = setInterval(updateCountdown, 10);
