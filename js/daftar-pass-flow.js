let makePassSubmit = document.getElementById('btn-make-pass');
makePassSubmit.addEventListener('click', checkInputPass);

let length = document.getElementById("length");
let letter = document.getElementById("num-cap-letter");

// ## Checking Pass Validation ##
let myInput = document.getElementById("id-make-pass");

// Check here
myInput.onkeyup = function() {
    let upperCaseLetters = /[A-Z]/g;
    let lowerCaseLetters = /[a-z]/g;
    let numbers = /[0-9]/g;
    if (myInput.value.match(upperCaseLetters) && myInput.value.match(lowerCaseLetters) &&
    myInput.value.match(numbers)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    if (myInput.value.length > 6) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

function checkInputPass() {
    let passInput = document.querySelectorAll('#pass-form input[name="text"]');

    if (passInput == undefined) {
        return false;
    }

    if (passInput[0].value == passInput[1].value && letter.classList.contains("valid") && 
    length.classList.contains("valid")) {
        fadeToFeedback();
    } else {
        // Add red border
        passInput[0].style.border = '1px solid #F14848';
        passInput[1].style.border = '1px solid #F14848';
        alert("Password belum valid");
        return false;
    }
}

function fadeToFeedback() {
    let passContainer = document.getElementsByClassName('pass-container');
    let feedbackContainer = document.getElementsByClassName('feedback');
    let welcomeTitle = document.getElementsByClassName('welcome');
    let bottomAdaAkun = document.getElementsByClassName('ada-akun');

    passContainer[0].style.display = "none";
    welcomeTitle[0].style.display = "none"
    bottomAdaAkun[0].style.display = "none";
    feedbackContainer[0].style.display = "block";
}