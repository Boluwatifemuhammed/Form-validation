const Form  = document.getElementById("reg-form");
const password  = document.getElementById("password");
const userName  = document.getElementById("username");
const email  = document.getElementById("email");
const repeatPassword  = document.getElementById("repeat-password");

    function showError(input, message) {
        const formGroup = input.closest(".form-group");
        const errorText = formGroup.querySelector(".error");
        errorText.textContent = message;
    }

    function clearError(input) {
        const formGroup = input.closest(".form-group");
        const errorText = formGroup.querySelector(".error");
        errorText.textContent = "";
    }

Form.addEventListener("submit", function (e) {
    e.preventDefault();
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;
    const emailValue = email.value;
    const userNameValue = userName.value;
    
    if (passwordValue === "") {
        showError(password, "Please fill in  this field")
    } else{
        clearError(password)
    };

})

console.log(password,email,userName,repeatPassword);
