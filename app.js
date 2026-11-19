const loginForm = document.getElementById("loginForm");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

// Show or hide password
togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "◎";
    } else {
        password.type = "password";
        togglePassword.textContent = "◉";
    }
});

// Login form
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const passwordValue = password.value;

    if (!email || !passwordValue) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.textContent = "Welcome to Cloud Desk! ☁";
});

// Forgot password
document.getElementById("forgotPassword")
    .addEventListener("click", function (event) {
        event.preventDefault();
        message.textContent =
            "Password recovery will be available soon! ♡";
    });

// Sign up
document.getElementById("signupLink")
    .addEventListener("click", function (event) {
        event.preventDefault();
        message.textContent =
            "Create your Cloud Desk account soon! ♡";
    });

// Social login placeholders
document.getElementById("googleButton")
    .addEventListener("click", function () {
        message.textContent =
            "Google sign-in needs to be connected.";
    });

document.getElementById("appleButton")
    .addEventListener("click", function () {
        message.textContent =
            "Apple sign-in needs to be connected.";
    });
