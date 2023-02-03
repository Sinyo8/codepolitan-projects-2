const textP1 = document.getElementById("p1-display");
const textP2 = document.getElementById("p2-display");
const btnP1 = document.getElementById("p1-button");
const btnP2 = document.getElementById("p2-button");
const reset = document.getElementById("reset");
const winScore = document.getElementById("winpoint");

let scoreP1 = 0;
let scoreP2 = 0;
let winPoint = winScore.value;
let gameOver = false;

function resetAngka() {
  gameOver = false;
  scoreP1 = 0;
  scoreP2 = 0;
  textP1.textContent = 0;
  textP2.textContent = 0;
}

btnP1.addEventListener("click", function () {
  if (!gameOver) {
    scoreP1 += 1;
    if (scoreP1 === winPoint) {
      gameOver = true;
    }
    textP1.textContent = scoreP1;
  }
});

btnP2.addEventListener("click", function () {
  if (!gameOver) {
    scoreP2 += 1;
    if (scoreP2 === winPoint) {
      gameOver = true;
    }
    textP2.textContent = scoreP2;
  }
});

reset.addEventListener("click", resetAngka);

winScore.addEventListener("click", function () {
  winPoint = parseInt(this.value);
  resetAngka();
});
