const Form  = document.getElementById("reg-form");
const password  = document.getElementById("password");
const userName  = document.getElementById("username");
const email  = document.getElementById("email");
const repeatPassword  = document.getElementById("repeat-password");

function showError(input, message) {
    const formGroup  = input.closest(".form-group");
    const errorMsg = formGroup.getElementById("error")
    errorMsg.textContent = message;
}

function clearError(input) {
    const formGroup  = input.closest(".form-group");
    const errorMsg = formGroup.getElementById("error");
    errorMsg.textContent = "";
}

Form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const passwordValue = password.value;
    const userNameValue = userName.value;
    const emailValue = email.value;
    const repeatPasswordValue = repeatPassword.value;

    if (passwordValue = "") {
        showError(password, "Please input a password")
    } else{
        clearError(password)
    }

    if (emailValue = "") {
        showError(email, "Please add an email")
    } else{
        clearError(email)
    }

    if (repeatPasswordValue = ""){
        showError(repeatPassword, "Please confirm password")
    } else{
        clearError(repeatPassword)
    }
    
    if (userNameValue = "") {
        showError(userName, "Please enter a username")
    }
})