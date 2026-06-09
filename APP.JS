const regForm = document.getElementById("reg-form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");


regForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userNameValue = userName.value;
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;
    const emailValue = email.value;

    if (userNameValue === "") {
        console.log("Username is required")
    }
    if (passwordValue === "") {
        console.log("Password is required")
    }
    if (emailValue === "") {
        console.log("Email is required")
    }
    if (repeatPasswordValue === "") {
        console.log("Please confirm password")
    }

    if (passwordValue !== repeatPasswordValue) {
        console.log("Passwords don't match");
        
    }
    const passwordPattern  = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    if (!passwordPattern.test(passwordValue)) {
        console.log("Passwords must contain letters and numbers");
        
    }
});
