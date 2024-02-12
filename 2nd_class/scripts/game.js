const score0E1 = document.getElementById("score1");
const score1E1 = document.getElementById("score2");

const diceE1 = document.querySelector(".dice");
const diceE2 = document.querySelector(".dice2");
const btnRoll = document.querySelector(".diceButton");
const btnRoll2 = document.querySelector(".diceButton2");

score0E1.textContent = 0;
score1E1.textContent = 0;

const current0E1 =  document.getElementById("current_1");
const current0E2 =  document.getElementById("current_2");

diceE1.classList.add("hidden");

let activePlayer = 0;
let currentScore = 0;

btnRoll.addEventListener("click", function() {
    diceE1.classList.remove("hidden"); 

    const dice = Math.floor(Math.random()*6) +1;
    // console.log(dice);
    diceE1.src = `/assets/dice-${dice}.png`;

    if (dice !== 1){
        currentScore  +=  dice;
        // current0E1.textContent = currentScore;
        document.getElementById(`current_$ {activePlayer}`).textContent = currentScore;
    }else{
        document.getElementById(`current_$ {activePlayer}`).textContent = 0;
    }
});

diceE2.classList.add("hidden");

btnRoll2.addEventListener("click", function() {
    diceE2.classList.remove("hidden"); 

    const dice2= Math.floor(Math.random()*6) +1;
    // console.log(dice2);
    diceE2.src = `/assets/dice-${dice2}.png`;
});





