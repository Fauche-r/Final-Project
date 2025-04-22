window.onload = function () {
    const username = localStorage.getItem("username");
    const greeting = document.getElementById("greetings");

    if (username) {
        greeting.textContent = `Welcome back, ${username}!`;
    } else {
        greeting.textContent = "You have not yet provided a username";
    }
};
