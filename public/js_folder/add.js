
document.getElementById('usernameInput').value = '<%= username %>';

document.addEventListener('DOMContentLoaded', function () {
    const perfumeForm = document.getElementById('perfumeForm');

    perfumeForm.addEventListener('submit', function (event) {
        let errorMessage = '';

        const perfumeName = document.getElementById('perfumeName').value.trim();
        if (!perfumeName) {
            errorMessage = 'Perfume Name is required.';
        } else {
            const price = document.getElementById('price').value.trim();
            if (!price) {
                errorMessage = 'Price is required.';
            } else {
                const reviews = document.getElementById('reviews').value.trim();
                if (!reviews) {
                    errorMessage = 'Reviews is required.';
                } else {
                    const perfumeType = document.getElementById('perfumeType').value.trim();
                    if (!perfumeType) {
                        errorMessage = 'Perfume Type is required.';
                    } else {
                        const perfumeImage = document.getElementById('perfumeImage').value.trim();
                        if (!perfumeImage) {
                            errorMessage = 'Perfume Image is required.';
                        }
                    }
                }
            }
        }

        if (errorMessage) {
            openValidationPopup(errorMessage);
            event.preventDefault(); 

            setTimeout(function () {
                closeValidationPopup();
            }, 2000);
        } else {
            openSuccessPopup('The perfume has been added successfully!');

            setTimeout(function () {
                closeSuccessPopup();
            }, 2000);
        }
    });
});

function openValidationPopup(message) {
    const popup = document.getElementById('validationPopup');
    const messageElement = document.getElementById('validationMessage');
    messageElement.textContent = message;
    popup.style.display = 'block';
}

function closeValidationPopup() {
    const popup = document.getElementById('validationPopup');
    popup.style.display = 'none';
}

function openSuccessPopup(message) {
    const popup = document.getElementById('successPopup');
    const messageElement = document.getElementById('successMessage');
    messageElement.textContent = message;
    popup.style.display = 'block';
}

function closeSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'none';
}