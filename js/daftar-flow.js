let surveyRadio = document.getElementById('')

let surveySubmit = document.getElementById('btn-selanjutnya');
surveySubmit.addEventListener('click', checkInputSurvey);

let daftarSubmit = document.getElementById('btn-send-verf');
daftarSubmit.addEventListener('click', checkInputDaftar);

/*
// Trigger function for verification code form field
verfCard();

let length = document.getElementById("length");
let letter = document.getElementById("num-cap-letter");
let counter = 30;
let phoneNum = '';
*/

function checkInputSurvey() {
    let surveyInput = document.querySelectorAll('#survey-form input[name="radio"]:checked');

    if (surveyInput[0] == undefined) {
        return false;
    } else {
        // Go to daftar card
        fadeToDaftar();
    }
}

function checkInputDaftar() {
    let daftarInput = document.querySelectorAll('#daftar-form input[name="text"]');
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneRegex = /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;

    // Check data daftar here
    if (daftarInput[0].value != "" && daftarInput[1].value.match(emailRegex) 
    && daftarInput[2].value.match(phoneRegex)) {
        // Go to verification card
        phoneNum = daftarInput[2].value;
        // fadeToCode();
        fadeToFeedback()
    } else {
        // Aktifin border merah or sumthin
        daftarInput[0].style.border = '1px solid #F14848';
        daftarInput[1].style.border = '1px solid #F14848';
        daftarInput[2].style.border = '1px solid #F14848';
        alert("Input tidak valid");
        return false;
    }
}

/* PENDING
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

// On submit click, validate input
function checkInputCode() {
    codeField = document.querySelectorAll('#verf-form input[name="code"]');
    const code = [...document.querySelectorAll('#verf-form input')]
        .filter(({name})=>name)
        .map(({value})=>value)
        .join('')

    if (code == '12345') {
        fadeToPass();
    } else {
        // Add red border
        for (let i = 0; i < codeField.length; i++) {
            codeField[i].style.border = '1px solid #F14848';
        }
        alert("Kode salah silahkan input kembali");
        return false;
    }
}

// Function for countdown resend verf button
function countdownButton() {
    let count = document.getElementById('resend-verf');
    count.className = '';

    if (counter > 0) {
        count.value = 'Kirim ulang kode (' + counter + ' detik)'
        counter--;
        setTimeout(countdownButton, 1000);
    } else if (counter == 0) {
        count.className = 'active';
        count.value = 'Kirim ulang kode';
        counter = 30;
        onResend();
    }
}

function onResend() {
    let count = document.getElementById('resend-verf');
    count.addEventListener('click', countdownButton);
}
*/

function fadeToDaftar() {
    let surveyContainer = document.getElementsByClassName('survey-container');
    let daftarContainer = document.getElementsByClassName('daftar-container');

    surveyContainer[0].style.display = "none";
    daftarContainer[0].style.display = "block";
}

/* PENDING
function fadeToCode() {
    let daftarContainer = document.getElementsByClassName('daftar-container');
    let verfContainer = document.getElementsByClassName('veri-container');
    let phoneHeader = document.getElementsByClassName('phone-num');
    let bottomAdaAkun = document.getElementsByClassName('ada-akun');

    phoneHeader[0].innerHTML = '+62 ' + phoneNum;
    daftarContainer[0].style.display = "none";
    bottomAdaAkun[0].style.display = "none";
    verfContainer[0].style.display = "block";

    countdownButton();
}
*/

function fadeToFeedback() {
    let feedbackContainer = document.getElementsByClassName('feedback');
    let welcomeTitle = document.getElementsByClassName('welcome');
    let daftarContainer = document.getElementsByClassName('daftar-container');
    let bottomAdaAkun = document.getElementsByClassName('ada-akun');

    welcomeTitle[0].style.display = "none"
    daftarContainer[0].style.display = "none";
    bottomAdaAkun[0].style.display = "none";
    feedbackContainer[0].style.display = "block";
}