document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    registerUser();
});

function registerUser() {
    

    // Crear un objeto FormData para enviar los datos del formulario
    const formData = {
        username : document.getElementById("username").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        profile_image : document.getElementById("profileImage").value
    };

    fetch("http://127.0.0.1:5000/users/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
    })
    .then(response => {
        if (response.status === 201) {
            // Redirect to profile page or show a success message if registration is successful
            return response.json().then(data => {
                alert("Usuario creado con éxito");
                window.location.href = "login.html";
            });
        } else {
            return response.json().then(data => {
                const messageElement = document.getElementById("message");
                messageElement.innerHTML = data.message;
                messageElement.style.color = "white";
            });
        }
    })
    .catch(error => {
        document.getElementById("message").innerHTML = "An error occurred.";
    });
}
