const regForm = document.getElementById("reg-form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");

console.log(regForm, password, repeatPassword);

regForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userNameValue = userName.value;
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;
    const emailValue = email.value;

    if (userName === "") {
        console.log("username is required")
    }
});
