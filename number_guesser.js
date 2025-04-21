
let randomN = Math.floor(Math.random() * 101);

const form = document.getElementById("number");
const input = document.getElementById("guess");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const Guess = Number(input.value);

    if (Guess < 0 || Guess > 100) {
        feedback.textContent = "Please enter a number between 0 and 100.";
        feedback.style.color = "orange";
    } else if (Guess < randomN) {
        feedback.textContent = "Higher!";
        feedback.style.color = "blue";
    } else if (Guess > randomN) {
        feedback.textContent = "Lower!";
        feedback.style.color = "blue";
    } else {
        feedback.textContent = `Correct!The number was ${randomN}.`;
        feedback.style.color = "green";
    }
}
);
