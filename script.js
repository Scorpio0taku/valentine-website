document.addEventListener("DOMContentLoaded", function () {
    // Password Input Form Logic
    let form = document.getElementById("passwordForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form refresh

            let password = document.getElementById("passwordInput").value.trim().toLowerCase();

            if (password === "orji") {
                // Show pop-up first before redirecting
                setTimeout(() => {
                    alert("Will you be my Valentine?");
                    window.location.href = "countdown.html"; // Normal flow
                }, 500);
            } else if (password === "dare") {
                window.location.href = "valentine.html"; // Bypass everything
            } else {
                alert("Incorrect password! Try again.");
            }
        });
    }

    // Countdown Timer Logic
    let countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        let targetDate = new Date("February 14, 2025 00:00:00").getTime();

        let countdownInterval = setInterval(function () {
            let now = new Date().getTime();
            let timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                countdownElement.innerHTML = "Happy Valentine's Day!";
                return;
            }

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `
                <span>${days}d</span> : 
                <span>${hours}h</span> : 
                <span>${minutes}m</span> : 
                <span>${seconds}s</span>
            `;
        }, 1000);
    }

    // Valentine's Message Page Enhancements
    let hearts = document.createElement("div");
    hearts.className = "heart-animation";
    document.body.appendChild(hearts);
});
