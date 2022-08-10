BASE_URL = "https://esyarat.herokuapp.com/"

let showPass = document.getElementById('togglePass');
showPass.addEventListener('click', showPassword);

let loginSubmit = document.getElementById('btn-login');
loginSubmit.addEventListener('click', checkInputLogin);

// Show password Field
function showPassword() {
    let input = document.getElementById("id-pass");
    let eye = document.getElementById("togglePass");
    if (input.type === "password") {
      input.type = "text";
      eye.src = "../img/eye-slashed.png"
    } else {
      input.type = "password";
      eye.src = "../img/Eye.png"
    }
}

// Check data Login
function checkInputLogin() {
    let loginInput = document.querySelectorAll('#login-form input[name="text"]');
    // let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Check data login here
    if (loginInput[0].value != "" && loginInput[1].value != "") {
      fetch(BASE_URL + "api/auth/signin", {
        method: 'POST',
        body: JSON.stringify({
          'username' : loginInput[0].value,
          'password' : loginInput[1].value,
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(function(response) {
          return response.json()
      }).then(function(data) {
          if (data.message === undefined) {
            window.location.href = "home.html";
          } else {
            loginInput[0].style.border = '1px solid #F14848';
            loginInput[1].style.border = '1px solid #F14848';
            alert(data.message);
            return false;
          }
      })
    } else {
      loginInput[0].style.border = '1px solid #F14848';
      loginInput[1].style.border = '1px solid #F14848';
      alert("Username or password is invalid");
      return false;
    }
}