const firstName = document.getElementById('firstName');
const surname = document.getElementById('surname');
const emailInput = document.getElementById('emailInput');
const password = document.getElementById('password');
const ErrorMessages = document.querySelectorAll(".error-message");
const button = document.getElementById('submit-btn');


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkForm(e) {
    e.preventDefault();
    const firstNameValue = firstName.value;
    const surnameValue = surname.value;
    const emailValue = emailInput.value;
    const passwordValue = password.value;

    if (firstNameValue === '') {
        setErrorFor(firstName, 'first name cannot be blank')
    } else {
        setSuccessFor(firstName);

    }
    if (surnameValue === '') {
        setErrorFor(surname, 'surname cannot be blank')
    } else {
        setSuccessFor(surname);

    }
    if (passwordValue === '') {
        setErrorFor(password, 'password cannot be blank')
    } else {
        setSuccessFor(password);

    }
    if (emailValue === '') {
        setErrorFor(emailInput, 'email cannot be blank')
    } else if (!validateEmail(emailValue)) {
        setErrorFor(emailInput, 'email is not valid')
    } else {
        setSuccessFor(emailInput);

    }
}

function setErrorFor(input, message) {
    const formDiv = input.parentElement;
    const small = formDiv.querySelector('small');

    small.innerText = message;
    formDiv.className = 'form-divs error'

}

function setSuccessFor(input) {
    const formDiv = input.parentElement;
    formDiv.className = 'form-divs success'
}

button.addEventListener('click', checkForm);