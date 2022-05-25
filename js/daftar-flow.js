let surveySubmit = document.getElementById('btn-selanjutnya');
surveySubmit.addEventListener('click', checkInputSurvey);

let daftarSubmit = document.getElementById('btn-send-verf');
daftarSubmit.addEventListener('click', checkInputDaftar);

let codeSubmit = document.getElementById('submi-code-verf');
codeSubmit.addEventListener('click', checkInputCode);

let makePassSubmit = document.getElementById('btn-make-pass');
makePassSubmit.addEventListener('click', checkInputPass);

verfCard();

let length = document.getElementById("length");
let letter = document.getElementById("num-cap-letter");

function checkInputSurvey() {
    let surveyInput = document.querySelectorAll('#survey-form input[name="radio"]:checked');

    if (surveyInput[0] == undefined) {
        // Aktifin border merah or sumthin
        return false;
    } else {
        console.log(surveyInput[0].value);

        // Go to daftar card
        fadeToDaftar();
    }
}

function checkInputDaftar() {
    let daftarInput = document.querySelectorAll('#daftar-form input[name="text"]');

    // Check data daftar here
    if (daftarInput[0].value == 'rafli' && daftarInput[1].value == 'rafli' && daftarInput[2].value == 'rafli') {
        const user = {
            [daftarInput[0].id] : daftarInput[0].value,
            [daftarInput[1].id] : daftarInput[1].value,
            [daftarInput[2].id] : daftarInput[2].value,
        };

        console.log(user);

        // Go to verification card
        fadeToCode();
    } else {
        // Aktifin border merah or sumthin
        return false;
    }
}

// For verification card
function verfCard() {
    const inputElements = [...document.querySelectorAll('input.code-input')]
    inputElements.forEach((ele,index)=>{
        ele.addEventListener('keydown',(e)=>{
            // if the keycode is backspace & the current field is empty
            // focus the input before the current. Then the event happens
            // which will clear the "before" input box.
            if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
        })
        ele.addEventListener('input',(e)=>{
            // take the first character of the input
            // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
            // but I'm willing to overlook insane security code practices.
            const [first,...rest] = e.target.value
            e.target.value = first ?? '' // first will be undefined when backspace was entered, so set the input to ""
            const lastInputBox = index===inputElements.length-1
            const insertedContent = first!==undefined
            if(insertedContent && !lastInputBox) {
                // continue to input the rest of the string
                inputElements[index+1].focus()
                inputElements[index+1].value = rest.join('')
                inputElements[index+1].dispatchEvent(new Event('input'))
            }
        })
    })
}

// On submit example verf code
function checkInputCode() {
    const code = [...document.querySelectorAll('#verf-form input')]
        .filter(({name})=>name)
        .map(({value})=>value)
        .join('')

    if (code == '12345') {
        console.log(code);
        fadeToPass();
    } else {
        // Add red border
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

function checkInputPass() {
    let passInput = document.querySelectorAll('#pass-form input[name="text"]');

    if (passChangeInput == undefined) {
        return false;
    }

    if (passInput[0].value == passInput[1].value && letter.classList.contains("valid") && 
    length.classList.contains("valid")) {
        console.log(passInput[0].value);
        fadeToFeedback();
    } else {
        // Add red border
        return false;
    }
}

function fadeToDaftar() {
    let surveyContainer = document.getElementsByClassName('survey-container');
    let daftarContainer = document.getElementsByClassName('daftar-container');

    surveyContainer[0].style.display = "none";
    daftarContainer[0].style.display = "block";
}

function fadeToCode() {
    let daftarContainer = document.getElementsByClassName('daftar-container');
    let verfContainer = document.getElementsByClassName('veri-container');

    daftarContainer[0].style.display = "none";
    verfContainer[0].style.display = "block";
}

function fadeToPass() {
    let verfContainer = document.getElementsByClassName('veri-container');
    let passContainer = document.getElementsByClassName('pass-container');

    verfContainer[0].style.display = "none";
    passContainer[0].style.display = "block";
}

function fadeToFeedback() {
    let passContainer = document.getElementsByClassName('pass-container');
    let feedbackContainer = document.getElementsByClassName('feedback');
    let bottomAdaAkun = document.getElementsByClassName('ada-akun');
    let welcomeTitle = document.getElementsByClassName('welcome');

    passContainer[0].style.display = "none";
    bottomAdaAkun[0].style.display = "none";
    welcomeTitle[0].style.display = "none"
    feedbackContainer[0].style.display = "block";
}