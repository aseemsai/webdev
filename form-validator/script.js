const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('re-password');

// List Event Listeners
const loadEventListeners = () => {
    form.addEventListener('submit', submitForm);
}

// Show Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Submit Form
const submitForm = (e) => {
    // console.log('Submit');
    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'Email is required')
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, 'Password2 is required')
    } else {
        showSuccess(password2);
    }
    if (password.value != password2.value) {
        showError(password2, "Passwords do not match");
        showError(password, "Passwords do not match");
    }

    e.preventDefault();
}

// Load Event Listeners
loadEventListeners();