let changeProfile = document.getElementById('btn-change-details');
changeProfile.addEventListener('click', checkInputProfile);

let changePass = document.getElementById('btn-ubah-pass');
changePass.addEventListener('click', checkInputPass);

let length = document.getElementById("length");
let letter = document.getElementById("num-cap-letter");

// Checking input for profile change
function checkInputProfile() {
    let profileInput = document.querySelectorAll('#ubah-profile input[name="text"]');
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneRegex = /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;

    // Check data daftar here
    if (profileInput[0].value != "" && profileInput[1].value.match(emailRegex) 
    && profileInput[2].value.match(phoneRegex)) {
        phoneNum = profileInput[2].value;
        // To do here
        return true;
    } else {
        // Aktifin border merah or sumthin
        profileInput[0].style.border = '1px solid #F14848';
        profileInput[1].style.border = '1px solid #F14848';
        profileInput[2].style.border = '1px solid #F14848';
        alert("Input tidak valid");
        return false;
    }
}

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

// Checking input pass
function checkInputPass() {
    let passInput = document.querySelectorAll('#pass-form input[name="text"]');

    if (passInput == undefined) {
        return false;
    }

    if (passInput[0] != "" && passInput[0] != passInput[1] && passInput[1].value == passInput[2].value && 
    letter.classList.contains("valid") && length.classList.contains("valid")) {
        // To do here
        return true;
    } else {
        // Add red border
        passInput[0].style.border = '1px solid #F14848';
        passInput[1].style.border = '1px solid #F14848';
        passInput[2].style.border = '1px solid #F14848';
        alert("Password belum valid");
        return false;
    }
}
