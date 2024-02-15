const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

const startTime = Date.now();
const endTime = startTime + 10 * 60 * 1000; // 10 minutes in milliseconds

function updateCountdown() {
    const currentTime = Date.now();
    const remainingTime = endTime - currentTime;

    if (remainingTime >= 0) {
        const remainingMinutes = Math.floor(remainingTime / 1000 / 60);
        const remainingSeconds = Math.floor((remainingTime / 1000) % 60);
        const remainingMilliseconds = Math.floor((remainingTime % 1000) / 10); // Extracting tens of milliseconds

        minutes.innerHTML = remainingMinutes < 10 ? '0' + remainingMinutes : remainingMinutes;
        seconds.innerHTML = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
        milliseconds.innerHTML = remainingMilliseconds < 10 ? '0' + remainingMilliseconds : remainingMilliseconds;
    } else {
        clearInterval(interval);
        alert("Countdown has finished!");
    }
}

// Initial call to update countdown
updateCountdown();

// Update countdown every 10 milliseconds
const interval = setInterval(updateCountdown, 10);
