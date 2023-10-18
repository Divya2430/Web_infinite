document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Passwords do not match.";
    } else {
        message.style.color = "red";
        message.textContent = "Registration successful!";
        // Here you can add code to submit the form data to the server.
    }
});
