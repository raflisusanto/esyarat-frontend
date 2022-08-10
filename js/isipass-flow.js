let changePassSubmit = document.getElementById('btn-make-pass');
changePassSubmit.addEventListener('click', checkForgotPass);

let length = document.getElementById("length");
let letter = document.getElementById("num-cap-letter");

// Checking Pass Validation
let myInput = document.getElementById("id-make-pass");

// For later
let email = '';

// Check here (example only)
myInput.onkeyup = function() {
    let upperCaseLetters = /[A-Z]/g;
    let lowerCaseLetters = /[a-z]/g;
    let numbers = /[0-9]/g;
    if (myInput.value.match(upperCaseLetters) && myInput.value.match(lowerCaseLetters) &&
    myInput.value.match(numbers)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }

    if (myInput.value.length > 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
}

function checkForgotPass() {
    let passChangeInput = document.querySelectorAll('#pass-change-form input[name="text"]');

    if (passChangeInput == undefined) {
        return false;
    }

    if (passChangeInput[0].value == passChangeInput[1].value && letter.classList.contains("valid") && 
    length.classList.contains("valid")) {
        fadeToFeedback();
    } else {
        // Add red border
        passChangeInput[0].style.border = '1px solid #F14848';
        passChangeInput[1].style.border = '1px solid #F14848';
        alert("Password tidak valid");
        return false;
    }
}


function fadeToFeedback() {
    let forgotPassContainer = document.getElementsByClassName('pass-container');
    let feedbackContainer = document.getElementsByClassName('feedback');
    let welcomeTitle = document.getElementsByClassName('forgot-pass-title');

    forgotPassContainer[0].style.display = "none";
    welcomeTitle[0].style.display = "none"
    feedbackContainer[0].style.display = "block";
}