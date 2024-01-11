document.getElementById('signupForm').addEventListener('submit', function (e) {
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorSpan = document.getElementById('passwordError');

    if (password !== confirmPassword) {
        e.preventDefault(); // Prevent form submission
        errorSpan.textContent = 'Passwords do not match';
    } else {
        errorSpan.textContent = '';
    }
});
