
let randomN = Math.floor(Math.random() * 101);

let attempt = 10;
const form = document.getElementById("number");
const input = document.getElementById("guess");
const feedback = document.getElementById("feedback");
const attemptFeedback = document.getElementById("attemptFeedback");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const Guess = Number(input.value);
if(attempt >0 ){
    if (Guess < 0 || Guess > 100) {
        feedback.textContent = "Please enter a number between 0 and 100.";
        feedback.style.color = "orange";
        attemptFeedback.textContent = ` You have ${attempt} left`;
    }
    else if (Guess < randomN) {
        feedback.textContent = "Higher!";
        feedback.style.color = "blue";
        attempt--;
        attemptFeedback.textContent = ` You have ${attempt} left`;
        
    } 
    else if (Guess > randomN) {
        feedback.textContent = "Lower!";
        feedback.style.color = "blue";
        attempt--;
        attemptFeedback.textContent = ` You have ${attempt} left`;
    } 
    else {
        feedback.textContent = `Correct!The number was ${randomN}.`;
        feedback.style.color = "green";
        attemptFeedback.textContent = ` You had ${attempt} left`;
        input.disabled = true;
    }
}
else{
    attemptFeedback.textContent = `You have ${attempt} attempt(s) left.`;
    input.disabled = true;
}
}
);

window.onload = function () {
    const username = localStorage.getItem("username");
    const greeting = document.getElementById("greetings");
    if (username) 
        {
        greeting.textContent = `Your username is : ${username}`;    
    } 
    else {
        greeting.textContent = "You have not yet provided a username";
    }
};


