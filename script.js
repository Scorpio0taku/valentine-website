document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput");
    const submitButton = document.getElementById("submitButton");

    if (submitButton) {
        submitButton.addEventListener("click", function () {
            const enteredPassword = passwordInput.value.trim().toLowerCase();

            if (enteredPassword === "Orji") {
                // Correct password - Show the Valentine pop-up
                showValentinePopup();
            } else if (enteredPassword === "Dare") {
                // Bypass everything and go directly to Valentine message
                window.location.href = "valentine-message.html";
            } else {
                // Incorrect password - Show error message
                showError();
            }
        });
    }

    function showValentinePopup() {
        const popUp = document.createElement("div");
        popUp.classList.add("popup");
        popUp.innerHTML = `
            <div class="popup-content">
                <p>Will you be my Valentine?</p>
                <button id="yesButton">Yes</button>
                <button id="noButton">No</button>
            </div>
        `;

        document.body.appendChild(popUp);

        // Handle Yes/No button clicks
        document.getElementById("yesButton").addEventListener("click", function () {
            window.location.href = "countdown.html";
        });

        document.getElementById("noButton").addEventListener("click", function () {
            alert("You picked the wrong option!");
        });
    }

    function showError() {
        const errorMessage = document.getElementById("error-message");
        if (errorMessage) {
            errorMessage.textContent = "Incorrect password. Try again!";
            errorMessage.style.color = "red";
        }
    }
});
