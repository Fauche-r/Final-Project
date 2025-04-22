window.onload = function () {
    const form = document.getElementById("username-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();

        if (username && email) {
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);

            window.location.href = "index.html";
        } 
        else {
            alert("Please fill in both fields.");
        }
    });
};
