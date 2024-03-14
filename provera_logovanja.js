let username = document.getElementById("usernameForm");
let password = document.getElementById("passwordForm");
let errorUsername = document.getElementById("errorUsername");
let errorPassword = document.getElementById("errorPassword");

let contactForm = document.getElementById("form");

contactForm.addEventListener("submit", function (e) {
    let messageUsername = [];
    let messagePassword = [];
    
    if (username.value === "" || username.value === null) {
        messageUsername.push("* Popunite polje");
    } else
    if (password.value === "" || password.value === null) {
        messagePassword.push("* Popunite polje");
    }

    if (messageUsername.length || messagePassword.length > 0) {
        e.preventDefault();
        errorUsername.innerText = messageUsername;
        errorPassword.innerText = messagePassword;
    } else
    if (username.value == "administrator") {
        e.preventDefault();
        if (password.value.length > 2) {
            window.location.assign("administrator.html");
        } else {
            messagePassword.push("* Neispravna lozinka");
            errorPassword.innerText = messagePassword;
        }
    } else
    if (username.value == "moderator") {
        e.preventDefault();
        if (password.value.length > 2) {
            window.location.assign("moderator.html");
        } else {
            messagePassword.push("* Neispravna lozinka");
            errorPassword.innerText = messagePassword;
        }
    } else
    if (username.value == "student") {
        e.preventDefault();
        if (password.value.length > 2) {
            window.location.assign("student.html");
        }
        else {
            messagePassword.push("* Neispravna lozinka");
            errorPassword.innerText = messagePassword;
        }
    } else {
        e.preventDefault();
        messageUsername.push("* Neispravno ime");
        errorUsername.innerText = messageUsername;
    }

});