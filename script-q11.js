function showMessage() {
    alert("Hey there! Welcome to my simple website sample.");
}

function sendForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fillup all fields.");
    } else {
        alert("Your message has been sent successfully!");
    }
}
