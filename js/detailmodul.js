let backNav = document.getElementById("backBtn");
backNav.addEventListener('click', goBack);

let buyButton = document.getElementById("buy-modul");
buyButton.addEventListener('click', buyModul);

function goBack() {
  window.location.href = "modulbahasa.html";
}

function openTabs(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function buyModul() {
  // Midtrans function here
}

function starFilter(evt) {
  // Declare all variables
  let i, starlinks;

  // Get all elements with class="filter-star" and remove the class "active"
  starlinks = document.getElementsByClassName("filter-star");
  for (i = 0; i < starlinks.length; i++) {
    starlinks[i].className = starlinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  // document.getElementById(starCount).style.display = "block";
  evt.currentTarget.className += " active";
}

function toggleOverlayOn() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("popupCard").style.display = "block";
}

function toggleOverlayOff() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupCard").style.display = "none";
}

function redirectQuiz(obj, evt) {
  // Get link here for specific level
  link = "materi.html";

  // Redirect
  if (obj.className == "active") {
    window.location.href = link;
  }
}

/* For later
function pagination() {

}
*/