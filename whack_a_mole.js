var score = 0;
var moleIndex = -1;
var moleTimer;
var squaresOfDivsAsArray = [];
var secondsPassed = 0;
var totalTime = 30;


function drawGameGridWithFlexbox() {
    var grid = document.getElementById("grid");
    grid.innerHTML = "";
    squaresOfDivsAsArray = [];

    for (let c = 0; c < 9; c++) {
        let sq = document.createElement("div");
        sq.classList.add("square");
        sq.id = "square-" + c;
        sq.addEventListener("click", handleClickOnSquare);
        grid.appendChild(sq);
        squaresOfDivsAsArray.push(sq);
    }
}


function handleClickOnSquare(event) {
    var clickedSquare = event.target;

    if (clickedSquare.classList.contains("mole")) {
        score++;
        document.getElementById("score").textContent = score;
        removeMole();
    }
}


function showMole() {
    removeMole();

    var rIndex = Math.floor(Math.random() * 9);
    moleIndex = rIndex;

    var moleSquare = squaresOfDivsAsArray[moleIndex];
    moleSquare.classList.add("mole");
    moleSquare.textContent = "🐹";
}


function removeMole() {
    if (moleIndex !== -1) {
        var previousMole = squaresOfDivsAsArray[moleIndex];
        previousMole.classList.remove("mole");
        previousMole.textContent = "";
        moleIndex = -1;
    }
}


function startGame() {
    score = 0;
    secondsPassed = 0;

    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = totalTime;
    document.getElementById("message").textContent = "";

    drawGameGridWithFlexbox();

    moleTimer = setInterval(runGameLoop, 1000);
}


function runGameLoop() {
    if (secondsPassed >= totalTime) {
        clearInterval(moleTimer);
        removeMole();
        document.getElementById("message").textContent =
            "⏱️ Game Over! Final Score: " + score;
        localStorage.setItem("score", score);
        return;
    }

    showMole();
    secondsPassed++;
    document.getElementById("time").textContent = totalTime - secondsPassed;
}

window.onload = function () {
    const username = localStorage.getItem("username");
    const greeting = document.getElementById("greetings");
    const score = localStorage.getItem("score");

    if (username && score) {
        greeting.textContent = `Your username is : ${username}, and your high score is ${score}/30`;
    }
    else if (username) 
        {
        greeting.textContent = `Your username is : ${username}`;    
    } 
    else {
        greeting.textContent = "You have not yet provided a username";
    }
};
