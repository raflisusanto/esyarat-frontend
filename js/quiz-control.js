const level = document.querySelector('.level');
const bab   = document.querySelector('.bab');
const title = document.querySelector('.title');
const desc  = document.querySelector('.desc');
const next  = document.querySelector('.next');
const link  = document.querySelector('source');
const video = document.querySelector('video');
const option_list = document.querySelector(".option_list");
const information = document.querySelector('.information');
const result = document.querySelector('.res');

var header = document.getElementById("numb");
var btns = header.getElementsByClassName("btn");
for (var j = 0; j < btns.length; j++) {
  btns[j].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[2].className = current[2].className.replace("active", "");
  this.className += " active";
  });
}

let i = 0;
let count = 0;
showData(i, count);
var k = 1;
next.onclick = ()=>{
    if(count < quiz[i].detail.length - 1){
        count = count + 1;
        var current = document.getElementsByClassName("active");
        btns[k].className = "btn active";
        console.log(btns[k]);
        current[2].className = current[2].className.replace("active", "");
        this.className += " active";
        k++;
        showData(i, count);
    }else if(count === quiz[i].detail.length - 1){
        let result_info_pass = '<div class="result"><div class="container"><img src="./img/success.png" /><p class="text-1">Yeay Level 1 sudah selesai, Good job! Nilai kamu adalah '+ ((userScore/quiz[i].detail.length)*100) +'</p><p class="text-2">Level 1 sudah kamu selesaikan, kamu dapat melanjutkan ke level selanjutnya</p><div class="nav"><button class="homepage"><a href="home.html">Kembali ke Homepage </a></button><button class="next-level">Level Selanjutnya</button></div></div></div>';
        let result_info_fail = '<div class="result"><div class="container"><img src="./img/failed.png" /><p class="text-1">Yeay Level 1 sudah selesai, Good job! Nilai kamu adalah '+ ((userScore/quiz[i].detail.length)*100) +'</p><p class="text-2">Level 1 sudah kamu selesaikan, kamu dapat melanjutkan ke level selanjutnya</p><div class="nav"><button class="homepage"><a href="home.html">Kembali ke Homepage </a></button><button class="next-level">Level Selanjutnya</button></div></div></div>';
        result.style.padding = '0';
        result.style.position = 'absolute';
        result.style.top = '0%';
        result.style.width = '100%';
        result.style.height = '100%';
        if(((userScore/quiz[i].detail.length)*100) > 70){
            result.insertAdjacentHTML("beforeend", result_info_pass);
        }else{
            result.insertAdjacentHTML("beforeend", result_info_fail);
        }
    }
}

function showData(index, count){
    level.innerHTML = quiz[index].level;
    bab.innerHTML = quiz[index].bab;
    title.innerHTML = quiz[index].title;
    desc.innerHTML = quiz[index].detail[count].question;
    link.setAttribute('src', quiz[index].detail[count].link);
    video.load();
    showQuetions(index, count);
    
}

function showQuetions(index, count){
    let option_tag = '<div class="option"><span>'+ quiz[index].detail[count].options[0] +'</span></div>'
    + '<div class="option"><span>'+ quiz[index].detail[count].options[1] +'</span></div>'
    + '<div class="option"><span>'+ quiz[index].detail[count].options[2] +'</span></div>'
    + '<div class="option"><span>'+ quiz[index].detail[count].options[3] +'</span></div>';
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");
    for(j=0; j < option.length; j++){
        option[j].setAttribute("onclick", "optionSelected(this)");
    }
}
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
let infoCorrect = '<div class="container correct"><p class="info">Good job! Jawaban kamu benar</p></div>'
let infoIncorrect = '<div class="container incorrect"><p class="info">Yahh, jawaban kamu belum tepat</p></div>'
let userScore = 0;

function optionSelected(answer){
    let userAns = answer.textContent;
    console.log(count);
    let correcAns = quiz[i].detail[count].answer;
    const allOptions = option_list.children.length;
    
    if(userAns == correcAns){
        userScore += 1;
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
        information.insertAdjacentHTML("beforeend", infoCorrect);
    }else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");
        information.insertAdjacentHTML("beforeend", infoIncorrect);
        for(j=0; j < allOptions; j++){
            if(option_list.children[j].textContent == correcAns){
                option_list.children[j].setAttribute("class", "option correct"); 
                option_list.children[j].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(j=0; j < allOptions; j++){
        option_list.children[j].classList.add("disabled"); 
    }
}

