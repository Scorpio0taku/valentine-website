document.addEventListener("DOMContentLoaded", function () {
    let passwordInput = document.getElementById("passwordInput");
    let submitButton = document.getElementById("submitButton");
    let valentineQuestion = document.getElementById("valentine-question");
    let errorMessage = document.getElementById("error-message");
    
    if (submitButton) {
        submitButton.addEventListener("click", function () {
            let password = passwordInput.value.trim().toLowerCase();
            
            if (password === "orji") {
                document.querySelector(".container").classList.add("hidden");
                valentineQuestion.classList.remove("hidden");
            } else if (password === "dare") {
                window.location.href = "valentine.html";
            } else {
                errorMessage.innerText = "Incorrect password! Try again.";
            }
        });
    }

    let yesButton = document.getElementById("yesButton");
    let noButton = document.getElementById("noButton");

    if (yesButton && noButton) {
        yesButton.addEventListener("click", function () {
            window.location.href = "countdown.html";
        });

        noButton.addEventListener("click", function () {
            alert("You picked the wrong option! Try again!");
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

            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        }, 1000);
    }
});
