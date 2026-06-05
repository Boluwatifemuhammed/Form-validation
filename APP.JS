const regForm = document.getElementById("reg-form");
const passwordInput = document.getElementById("password")
const repeatPasswordInput = document.getElementById("repeat-password")
console.log(regForm, passwordInput, repeatPasswordInput);

regForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const passwordValue = passwordInput.value; 
    const repeatPasswordValue = repeatPasswordInput.value;
    
    if (passwordValue !== repeatPasswordValue) {
        const errorMsg = document.createElement("p")
        errorMsg.classList.add("error-msg")
    } else{
        
    }
})
