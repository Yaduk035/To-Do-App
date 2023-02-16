const username = document.getElementById("username");
const password = document.getElementById("pwd");

function validateForm() {
    if (username.value==="admin" && password.value==="12345") {
        return true
    }
    else {
        alert("Incorrect username or password")
        return false
    }
}