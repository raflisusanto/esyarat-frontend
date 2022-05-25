let emailSubmit = document.getElementById('btn-send-email');
emailSubmit.addEventListener('click', checkInputEmail);

let changePassSubmit = document.getElementById('btn-make-pass');
changePassSubmit.addEventListener('click', checkForgotPass);

let length = document.getElementById("length");
let letter = document.getElementById("num-cap-letter");

function checkInputEmail() {
    let emailInput = document.querySelectorAll('#email-form input[name="text"]');

    // Check data daftar here
    if (emailInput[0].value == 'rafli') {
        // Go to pass creation
        fadeToForgotPass();
    } else {
        // Aktifin border merah or sumthin
        return false;
    }
}

// Checking Pass Validation
let myInput = document.getElementById("id-make-pass");

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
        console.log(passChangeInput[0].value);
        fadeToFeedback();
    } else {
        // Add red border
        return false;
    }
}

function fadeToForgotPass() {
    let emailContainer = document.getElementsByClassName('forgot-pass-container');
    let forgotPassContainer = document.getElementsByClassName('pass-container');

    emailContainer[0].style.display = "none";
    forgotPassContainer[0].style.display = "block";
}

function fadeToFeedback() {
    let forgotPassContainer = document.getElementsByClassName('pass-container');
    let feedbackContainer = document.getElementsByClassName('feedback');
    let bottomIngatPass = document.getElementsByClassName('ingat-pass');
    let welcomeTitle = document.getElementsByClassName('forgot-pass-title');

    forgotPassContainer[0].style.display = "none";
    bottomIngatPass[0].style.display = "none";
    welcomeTitle[0].style.display = "none"
    feedbackContainer[0].style.display = "block";
}
