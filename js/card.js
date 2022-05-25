let textIndex = 0;
showSlides();

function showSlides() {
    let i;
    let text = document.getElementsByClassName("text-content");
    let dot1 = document.getElementsByClassName("dot1");
    let dot2 = document.getElementsByClassName("dot2");
    let dot3 = document.getElementsByClassName("dot3");
    
    for (i = 0; i < text.length; i++) {
      text[i].style.display = "none"; 
    }
    textIndex++;
    if (textIndex > text.length) {textIndex= 1}    

    dot1[0].className = dot1[0].className.replace(" active", "");
    dot2[0].className = dot2[0].className.replace(" active", "");
    dot3[0].className = dot3[0].className.replace(" active", "");

    text[textIndex-1].style.display = "block";  

    // active in sesuai index textindex
    if (textIndex == 1) {
        dot1[0].className += " active";
    } else if (textIndex == 2) {
        dot2[0].className += " active";
    } else if (textIndex == 3) {
        dot3[0].className += " active";
    }
    setTimeout(showSlides, 5000); // Change image every 5 seconds
  }