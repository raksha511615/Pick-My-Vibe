/* =========================================
   PICK MY VIBE 🎀
   Final JavaScript
========================================= */


let choices = [];


/* ---------- QUESTION 1 ---------- */

function chooseFirstVibe(choice) {

    choices[0] = choice;

    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";

    updateProgress(2);
}


/* ---------- QUESTION 2 ---------- */

function chooseSecondVibe(choice) {

    choices[1] = choice;

    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";

    updateProgress(3);
}


/* ---------- QUESTION 3 ---------- */

function chooseThirdVibe(choice) {

    choices[2] = choice;

    document.getElementById("question3").style.display = "none";
    document.getElementById("reveal").style.display = "block";

    updateProgress(3);
}


/* ---------- PROGRESS ---------- */

function updateProgress(questionNumber) {

    let percentage = (questionNumber / 3) * 100;

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("progressText").innerHTML =
        "Question " + questionNumber + " of 3 💗";
}


/* ---------- SHOW RESULT ---------- */

function showResult() {

    let first = choices[0];
    let second = choices[1];
    let third = choices[2];

    let result = "";
    let description = "";


    /* ---------- VIBE RESULT ---------- */

    if (
        first.includes("Staying home") &&
        third.includes("Movie night")
    ) {
        result = "🧸 Cozy Princess";
        description =
            "You love comfort, peaceful moments, and cozy little things. 🧸💗";
    }

    else if (
        first.includes("Beach day") &&
        third.includes("Travel adventure")
    ) {
        result = "🌊 Free Spirit";
        description =
            "You are adventurous, carefree, and always ready for a new experience. 🌊✨";
    }

    else if (
        first.includes("Shopping") &&
        third.includes("Luxury day")
    ) {
        result = "💎 Luxury It Girl";
        description =
            "You love glamour, confidence, and treating yourself like the main character. 💎👑";
    }

    else if (
        second.includes("Cute & girly") &&
        third.includes("Cafe date")
    ) {
        result = "🎀 Pink Princess";
        description =
            "You are sweet, stylish, feminine, and absolutely love cute vibes. 🎀💕";
    }

    else if (second.includes("Classy & stylish")) {
        result = "✨ Classy Queen";
        description =
            "You have an elegant personality and a natural sense of style. ✨👑";
    }

    else if (second.includes("Comfy & sporty")) {
        result = "👟 Sporty Girl";
        description =
            "You are energetic, active, comfortable, and always ready to have fun. 👟💗";
    }

    else if (second.includes("Flowy & aesthetic")) {
        result = "🌷 Dreamy Girl";
        description =
            "You have a soft, aesthetic personality and love beautiful little moments. 🌷✨";
    }

    else if (first.includes("Shopping")) {
        result = "🛍️ Fashion Girl";
        description =
            "You love fashion, shopping, and expressing yourself through your style. 🛍️💅";
    }

    else if (first.includes("Beach day")) {
        result = "🌊 Beach Babe";
        description =
            "You are relaxed, fun-loving, and happiest near the waves. 🌊☀️";
    }

    else if (third.includes("Travel adventure")) {
        result = "✈️ Travel Girl";
        description =
            "You love exploring new places and creating unforgettable memories. ✈️🌍";
    }

    else if (third.includes("Luxury day")) {
        result = "💎 Glam Girl";
        description =
            "You enjoy luxury, sparkle, and making every moment feel special. 💎✨";
    }

    else if (third.includes("Cafe date")) {
        result = "☕ Cafe Cutie";
        description =
            "You love cozy cafes, cute moments, and enjoying life's simple pleasures. ☕🎀";
    }

    else {
        result = "💅 Main Character";
        description =
            "You have a fun personality and definitely give main character energy! 💅✨";
    }


    /* ---------- DISPLAY RESULT ---------- */

    document.getElementById("result").innerHTML =

        "<div class='vibe-badge'>✨ YOUR VIBE ✨</div>" +

        "<h2>💗 Your Choices 💗</h2>" +

        "<p>🌸 " + choices[0] + "</p>" +

        "<p>👗 " + choices[1] + "</p>" +

        "<p>✨ " + choices[2] + "</p>" +

        "<h2>Your Vibe Is...</h2>" +

        "<h1>" + result + "</h1>" +

        "<p class='vibe-description'>" +
        description +
        "</p>";


    /* ---------- SHOW RESULT SCREEN ---------- */

    document.getElementById("result").style.display = "block";

    document.getElementById("result").style.animation =
        "resultAppear 0.7s ease";

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("progressText").innerHTML =
        "✨ Your vibe has been revealed! ✨";

    document.getElementById("revealButton").style.display = "none";

    document.getElementById("restartButton").style.display =
        "inline-block";
}


/* ---------- RESTART QUIZ ---------- */

function restartQuiz() {

    choices = [];


    document.getElementById("question1").style.display = "block";

    document.getElementById("question2").style.display = "none";

    document.getElementById("question3").style.display = "none";


    document.getElementById("result").style.display = "none";

    document.getElementById("result").innerHTML = "";


    document.getElementById("reveal").style.display = "none";

    document.getElementById("revealButton").style.display =
        "inline-block";

    document.getElementById("restartButton").style.display =
        "none";


    document.getElementById("progressBar").style.width =
        "33.33%";

    document.getElementById("progressText").innerHTML =
        "Question 1 of 3 🌸";
}