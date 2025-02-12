document.addEventListener("DOMContentLoaded", function () {
    let passwordInput = document.getElementById("passwordInput");
    let submitButton = document.getElementById("submitButton");
    let valentineQuestion = document.getElementById("valentine-question");
    let errorMessage = document.getElementById("error-message");

    if (submitButton) {
        submitButton.addEventListener("click", function () {
            let password = passwordInput.value.trim().toLowerCase();
            console.log("Entered password:", password); // Debugging log

            if (password === "orji") { 
                console.log("Correct password entered!");
                document.querySelector(".container").classList.add("hidden");
                valentineQuestion.classList.remove("hidden");
            } else if (password === "dare") {  
                console.log("Bypass password entered! Redirecting...");
                window.location.href = "valentine.html";
            } else {
                console.log("Incorrect password entered!");
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

    // Typewriter Effect for Love Letter
    let messageText = `Happy Valentine's Day.

This is just a message to show you how much I appreciate you and care for you. I'm thankful for you being here. You're just a wonderful, unique, and great person overall. I think that's one of the things that draws me to you. Because to be honest, I don't even know how I'm in this kind of situation again. Last year, I thought I was done with relationships, but here I am. Two months later, a finished man. I mean, if the me of November or early December last year could see me now, they'd probably be shaking their heads, wondering why I'm in a relationship again after I swore I would never enter one. But you know, nobody knows where life takes you. I don't think I've ever been in a relationship where the person gives me the majority of what I give them. You know, when it comes to expressing feelings. Maybe it's because I've dated toxic people, or I'm the toxic one, or it's my lack of emotional expression, but I don't know. You are the first person who's told me that you love me—outside of my family. And actually, that day you said it, I was really touched. I don't know. I literally went to bed smiling. And every time I feel weird, I go back and replay it over and over and over and over again.

I love you.

I don't think there's any other way I can put it. I'm just thankful to have you in my life. And I'm thankful you gave me this opportunity. I will try my best not to let you down or disappoint you. It's not going to be easy for me, but I will definitely try my best to meet your expectations to the best of my ability. Obviously, it's not going to be perfect, but I hope you stay in my life forever, and I can keep planning towards the future. You know, I'm still waiting for the day you sing for me. But they say good things come to those who wait, so I guess I'll just have to wait—especially to see you in person. If you don't run and jump into my arms when I see you, there's actually going to be a problem. I'm going to wait. I'm going to savor every moment until then. Until we meet face to face. And then the relationship moves to a different level. 
So I'll be waiting.

So we can go through this together.

Me and you.

One plus one equals one.

So once again, thank you.

I love you.`; // (Your message remains unchanged)

    let messageElement = document.getElementById("valentine-message");
    let index = 0;

    function typeWriter() {
        if (index < messageText.length) {
            messageElement.innerHTML += messageText.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Speed of typing
        }
    }

    typeWriter();

    // Easter Egg (Reveal Hidden Message)
    window.revealMessage = function () {
        let hiddenMessage = document.getElementById("hidden-message");
        hiddenMessage.style.display = "block";
    };
});
