let countdownInterval;

function startCountdown() {
    clearInterval(countdownInterval); // Clear previous countdown if any

    const targetDate = new Date(document.getElementById('datetime').value).getTime();

    if (isNaN(targetDate)) {
        alert("Please select a valid date and time.");
        return;
    }

    // Update the countdown every second
    countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerText = "Countdown expired";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

function clearCountdown() {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerText = "";
}
