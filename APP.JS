const regForm = document.getElementById("reg-form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeat-password");
const togglePassword = document.getElementById("togglePassword");


function showError(input, message) {
    const formGroup = input.parentElement;
    const errorText = formGroup.querySelector(".error");
    errorText.textContent = message;
};


function clearError(input) {
    const formGroup = input.parentElement;
    const errorText = formGroup.querySelector(".error");
    errorText.textContent = " ";
};

togglePassword.addEventListener("click", function(){
    if (password.type === "text") {
        password.type = "password";
    } else {
        password.type = "text"
    }
});

regForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const userNameValue = userName.value;
    const passwordValue = password.value;
    const repeatPasswordValue = repeatPassword.value;
    const emailValue = email.value;

    const passwordPattern  = /^(?=.*[A-Za-z])(?=.*\d).+$/;


    if (userNameValue === "") {
        showError(userName, "Username is required")
    } else(
        clearError(userName)
    )

    if (passwordValue === "") {
        showError(password, "Password is required")
    } 
    else if (!passwordPattern.test(passwordValue)) {
        showError(password, "Passwords must contain letters and numbers");
    } else(
        clearError(password)
    )


    if (emailValue === "" || !emailValue.includes("@gmail.com")) {
        showError(email, "Please enter a valid email")
    } else(
        clearError(email)
    )

    
    if (repeatPasswordValue === "") {
        showError(repeatPassword, "Please confirm password")
    } else(
        clearError(repeatPassword)
    )

    if (passwordValue !== repeatPasswordValue) {
        showError(repeatPassword, "Passwords don't match");
        
    } else(
        clearError(repeatPassword)
    )

    
});
