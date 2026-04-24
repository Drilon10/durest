function showSnackbar(message, isSuccess = true) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.style.backgroundColor = isSuccess ? "#4caf50" : "#f44336";

    snackbar.className = "show";

    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', "")
    }, 3000)
}


let signupForm = document.getElementById('signupForm');

if(signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const cPassword = document.getElementById('confirmPassword').value.trim();

        if(!name || !email || !password || !cPassword) {
            showSnackbar("Please fill all the fields", false);
            return;
        }

        if(password != cPassword) {
            showSnackbar("Passwords does not match", false);
            return;
        }

        const user = {name, email, password};
        localStorage.setItem('user', JSON.stringify(user));
        showSnackbar("Registration successful", true);

        setTimeout(() => {window.location.href = "login.html"}, 1500)
    })
}


let loginForm = document.getElementById('loginForm');

if(loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if(!storedUser || storedUser.email != email || storedUser.password != password ) {
            showSnackbar("Invalid email or password", false);
            return;
        }

        localStorage.setItem('isLoggedIn', true);
        showSnackbar("Login successful", true);

        setTimeout(() => {window.location.href = "home.html"}, 2000);
    });
}