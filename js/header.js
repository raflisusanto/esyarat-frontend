let notifBell = document.getElementById('notif-bell-img');
notifBell.addEventListener('click', showNotification);

let profile = document.getElementById('profile-icon');
profile.addEventListener('click', profileDropdown);

let profileRedirect = document.getElementById('first-item');
profileRedirect.addEventListener('click', openProfile);

function openProfile() {
    window.location.href = "profile.html"
}

function showNotification() {
    let notifContent = document.getElementById("notif-content");

    if (notifContent.className == "dropdown active") {
        notifContent.className = notifContent.className.replace(" active", "");
        notifContent.style.display = 'none';
    } else {
        notifContent.className += " active";
        notifContent.style.display = 'block';
    }
}

function profileDropdown() {
    let profileContent = document.getElementById("profile-dropdown");

    if (profileContent.className == "dropdown active") {
        profileContent.className = profileContent.className.replace(" active", "");
        profileContent.style.display = 'none';
    } else {
        profileContent.className += " active";
        profileContent.style.display = 'block';
    }
}

// Header Hamburger Function
const mobileBtn = document.getElementById('mobile-cta')
        nav = document.querySelector('nav')
        mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})