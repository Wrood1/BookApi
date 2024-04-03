function validateForm() {
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('loginError').innerText = '';


    return true; 
}

function displayLoginError(message, fieldId) {
    const errorDiv = document.getElementById(`${fieldId}Error`);
    errorDiv.innerText = message;
    errorDiv.style.color = 'red';
}

const errorMessage = new URLSearchParams(window.location.search).get('error');
if (errorMessage) {
    displayLoginError(errorMessage, 'login'); 
}