// Password Protection
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    if (password.toLowerCase() === 'orgi') {
        window.location.href = 'countdown.html';
    } else {
        document.getElementById('errorMessage').innerHTML = "Incorrect password. Try again!";
        document.getElementById('errorMessage').style.color = "red";
    }
}

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('February 14, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (difference < 0) {
        document.getElementById('countdown').innerHTML = "Happy Valentine's Day!";
    }
}

if (document.getElementById('countdown')) {
    setInterval(updateCountdown, 1000);
}
