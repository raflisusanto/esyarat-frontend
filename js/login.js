let showPass = document.getElementById('togglePass');
showPass.addEventListener('click', showPassword);

let loginSubmit = document.getElementById('btn-login');
loginSubmit.addEventListener('click', checkInputLogin);

function showPassword() {
    let input = document.getElementById("id-pass");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
}

function checkInputLogin() {
    let loginInput = document.querySelectorAll('#login-form input[name="text"]');
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Check data login here
    if (loginInput[0].value != "" && loginInput[0].value.match(emailRegex) 
    && loginInput[1].value != "") {
        window.location.href = ""; // Redirect to home
    } else {
        loginInput[0].style.border = '1px solid #F14848';
        loginInput[1].style.border = '1px solid #F14848';
        alert("Input tidak valid / Email belum terdaftar / Password Salah");
        return false;
    }
}