let emailSubmit = document.getElementById('btn-send-email');
emailSubmit.addEventListener('click', checkInputEmail);

let email = "";

function checkInputEmail() {
    let emailInput = document.querySelectorAll('#email-form input[name="text"]');
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Check data email here
    if (emailInput[0] != "" && emailInput[0].value.match(emailRegex)) {
        // Send verification email
        email = emailInput[0].value;
        // Fade to feedback
        fadeToFeedback();
    } else {
        // Aktifin border merah or sumthin
        emailInput[0].style.border = '1px solid #F14848';
        alert("Email tidak valid");
        return false;
    }
}

function fadeToFeedback() {
    let emailContainer = document.getElementsByClassName('forgot-pass-container');
    let bottomIngatPass = document.getElementsByClassName('ingat-pass');
    let welcomeTitle = document.getElementsByClassName('forgot-pass-title');
    let feedbackContainer = document.getElementsByClassName('feedback');
    let emailUser = document.getElementById('email-fp');

    emailUser.innerHTML = ' ' + email + ' ';
    emailContainer[0].style.display = "none";
    bottomIngatPass[0].style.display = "none";
    welcomeTitle[0].style.display = "none"
    feedbackContainer[0].style.display = "block";
}