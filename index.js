function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage.innerHTML = "Invalid email address";
        return;
    }

    // Password should be at least 8 characters long
    if (password.length < 8) {
        errorMessage.innerHTML = "Password must be at least 8 characters long";
        return;
    }

    // Form is valid, you can submit the form or perform additional actions here
    errorMessage.innerHTML = "Form submitted successfully!";
    // Additional actions...
}