const Form  = document.getElementById("reg-form");
const password  = document.getElementById("password");
const userName  = document.getElementById("username");
const email  = document.getElementById("email");
const repeatPassword  = document.getElementById("repeat-password");

function showError(input, message) {
    const formGroup  = input.closest(".form-group");
    const error = formGroup.getElementById("error")
    
}

Form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const passwordValue = password.value;
    const userNameValue = userName.value;
    const emailValue = email.value;
    const repeatPasswordValue = repeatPassword.value;

    if (passwordValue = "") {
        
    }
    
})