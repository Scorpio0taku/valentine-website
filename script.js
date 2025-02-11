document.addEventListener("DOMContentLoaded", function () {
    const passwordForm = document.getElementById("password-form");
    const passwordInput = document.getElementById("password");
    
    if (passwordForm) {
        passwordForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const enteredPassword = passwordInput.value.trim();

            if (enteredPassword === "Orgi") {
                showValentinePopup();
            } else if (enteredPassword === "Dare") {
                window.location.href = "valentine.html"; // Bypass everything
            } else {
                alert("Incorrect password! Try again.");
            }
        });
    }
});

function showValentinePopup() {
    const popup = document.createElement("div");
    popup.innerHTML = `
        <div class="popup">
            <p>Will you be my Valentine?</p>
            <button id="yes-btn">Yes</button>
            <button id="no-btn">No</button>
        </div>
    `;
    document.body.appendChild(popup);

    document.getElementById("yes-btn").addEventListener("click", function () {
        window.location.href = "countdown.html";
    });

    document.getElementById("no-btn").addEventListener("click", function () {
        alert("You picked the wrong option!");
    });
}

// COUNTDOWN SCRIPT
if (window.location.pathname.includes("countdown.html")) {
    const countdownDate = new Date("Feb 14, 2025 00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = countdownDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Happy Valentine's Day!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            <div class="countdown-box"><span>${days}</span> days</div>
            <div class="countdown-box"><span>${hours}</span> hours</div>
            <div class="countdown-box"><span>${minutes}</span> minutes</div>
            <div class="countdown-box"><span>${seconds}</span> seconds</div>
        `;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
}
