document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    login();
});

function login() {
    const data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    fetch("http://127.0.0.1:5000/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 200) {
            // Redirect to profile page if login is successful
            return response.json().then(data => {
                window.location.href = "app.html";
            });
        } else {
            return response.json().then(data => {
                const messageElement = document.getElementById("message");
                messageElement.innerHTML = data.message;
                messageElement.style.color = "White";
            });
        }
    })
    .catch(error => {
        document.getElementById("message").innerHTML = "An error occurred.";
    });
}