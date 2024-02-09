const rolldice1 =  document.getElementById("rolldice1");
const rolldice2 =  document.getElementById("rolldice2");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

const min = 1;
const max = 6;
let randomNum;

rolldice1.onclick = function(){

    randomNum = Math.floor(Math.random() * max) + min;
    score1.textContent = randomNum;

}

rolldice2.onclick = function(){

    randomNum = Math.floor(Math.random() * max) + min;
    score2.textContent = randomNum;

}