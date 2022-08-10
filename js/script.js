const level = document.querySelector('.level');
const bab   = document.querySelector('.bab');
const title = document.querySelector('.title');
const desc  = document.querySelector('.desc');
const kesulitan = document.querySelector('.kesulitan');
const next  = document.querySelector('.next');
const prev  = document.querySelector('.prev');
const link  = document.querySelector('source');
const video = document.querySelector('video');
const img   = document.querySelector('.icon-difficult');
const img_detail = document.querySelector('.detail-gerakan');
const quiz = document.querySelector('.quiz-btn');
const numb = document.querySelectorAll('.btn');

let i = 0;
let count = 0;
showData(i, count);

var header = document.getElementById("numb");
var btns = header.getElementsByClassName("btn");
for (var j = 0; j < btns.length; j++) {
  btns[j].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[1].className = current[1].className.replace("active", "");
  this.className += " active";
  });
}


function showData(index, count){
    level.innerHTML = materi[index].level;
    bab.innerHTML = materi[index].bab;
    title.innerHTML = materi[index].detail[count].title;
    desc.innerHTML = materi[index].detail[count].desc;
    if(materi[index].kesulitan === "Mudah"){
        img.src="./img/level-easy.png";
    }
    img_detail.src = materi[index].detail[count].img;
    kesulitan.innerHTML = materi[index].kesulitan;
    link.setAttribute('src', materi[index].detail[count].link);
    video.load();
    
}

let k = 1;

quiz.onclick = function () {
    location.href = "quiz.html";
};

prev.onclick = ()=>{
    if(count > 0){
        count = count - 1;
        var current = document.getElementsByClassName("active");
        console.log("ini k : ", k);
        btns[k].className = "btn";
        current[1].className = current[1].className.replace("active", "");
        k = k - 2;
        console.log(k, " ",btns[k]);
        btns[k].className = "btn active";
        console.log(k, " ",btns[k]);
        
        this.className += " active";
        showData(i, count);
    }
}


next.onclick = ()=>{
    if(count < materi[i].detail.length - 1){
        count = count + 1;
        var current = document.getElementsByClassName("active");
        btns[k].className = "btn active";
        current[1].className = current[1].className.replace("active", "");
        this.className += " active";
        k++;
        showData(i, count);
    }
}


