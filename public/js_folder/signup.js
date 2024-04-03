document.addEventListener('DOMContentLoaded', function () {
    const errorMessage = new URLSearchParams(window.location.search).get('error');
    const signupError = document.getElementById('signupError');
    signupError.innerText = errorMessage || '';
    signupError.style.color = 'red';

    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const email = form.querySelector('input[name="email"]').value;
        const name = form.querySelector('input[name="name"]').value;
        const password = form.querySelector('input[name="password"]').value;
        const conpassword = form.querySelector('input[name="conpassword"]').value;

        if (!isValidEmail(email)) {
            signupError.innerText = 'Please enter a valid email address';
            signupError.style.color = 'red';
            event.preventDefault();
            return;
        }

        if (!name.trim()) {
            signupError.innerText = 'Please enter your name';
            signupError.style.color = 'red';
            event.preventDefault();
            return;
        }

        if (password.length < 8) {
            signupError.innerText = 'Password must be at least 8 characters';
            signupError.style.color = 'red';
            event.preventDefault();
            return;
        }

        if (password !== conpassword) {
            signupError.innerText = 'Passwords do not match';
            signupError.style.color = 'red';
            event.preventDefault();
            return;
        }

      
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});