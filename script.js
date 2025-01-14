function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Simple email and password validation
    if (!email.includes("@") || email.length < 5) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}
