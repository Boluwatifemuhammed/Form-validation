const regForm = document.getElementById("reg-form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");


function showError(input, message) {
    const formGroup = input.parentElement;
    const errorText = formGroup.querySelector(".error");
    errorText.textContent = message;
};

regForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userNameValue = userName.value;
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;
    const emailValue = email.value;

    if (userNameValue === "") {
        showError(userName, "Username is required")
    }
    if (passwordValue === "") {
        showError(password, "Password is required")
    }
    if (emailValue === "" || !emailValue.includes("@gmail.com")) {
        showError(email, "Please enter a valid email")
    }
    if (repeatPasswordValue === "") {
        showError(repeatPassword, "Please confirm password")
    }

    if (passwordValue !== repeatPasswordValue) {
        showError(repeatPassword, "Passwords don't match");
        
    }
    const passwordPattern  = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    if (!passwordPattern.test(passwordValue)) {
        showError(password, "Passwords must contain letters and numbers");
        
    }

});
