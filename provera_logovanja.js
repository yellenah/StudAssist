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
    } else 
    if (username.value === "administrator") {
        if (password.value.length > 2) {
            e.preventDefault();
            window.location.assign("administrator.html");
        } else {
            messageUsername = [];
            errorUsername.innerText = "";
            messagePassword.push("* Neispravna lozinka");
            errorPassword.innerText = messagePassword;
        }
    } else
    if (username.value === "moderator") {
        if (password.value.length > 2) {
            e.preventDefault();
            window.location.assign("moderator.html");
        } else {
            messageUsername = [];
            errorUsername.innerText = "";
            messagePassword.push("* Neispravna lozinka");
            errorPassword.innerText = messagePassword;
        }
    } else
    if (username.value === "student") {
        if (password.value.length > 2) {
            e.preventDefault();
            window.location.assign("student.html");
        }
        else {
            messageUsername = [];
            errorUsername.innerText = "";
            messagePassword.push("* Neispravna lozinka");
            errorPassword.innerText = messagePassword;
        }
    } else {
        messageUsername.push("* Neispravno ime");
        errorUsername.innerText = messageUsername;
    }

    if (messageUsername.length || messagePassword.length > 0) {
        e.preventDefault();
        errorUsername.innerText = messageUsername;
        errorPassword.innerText = messagePassword;
    }

});