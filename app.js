const p1 = {
  score: 0,
  btn: document.querySelector("#p1Btn"),
  display: document.querySelector("#p1Score"),
};
const p2 = {
  score: 0,
  btn: document.querySelector("#p2Btn"),
  display: document.querySelector("#p2Score"),
};

const reset = document.querySelector("#ResetBtn");
const playto = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.textContent = player.score;
    if (player.score === winningScore) {
      isGameOver = true;
      showWinner(player.display, opponent.display);
      disabled();
    }
  }
}
p1.btn.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.btn.addEventListener("click", function () {
  updateScores(p2, p1);
});

reset.addEventListener("click", function () {
  endGame();
});

const endGame = () => {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.display.textContent = 0;
    p.score = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.btn.disabled = false;
  }
};

playto.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  endGame();
});

const showWinner = (winner, loser) => {
  winner.classList.add("has-text-success");
  loser.classList.add("has-text-danger");
};
const disabled = () => {
  p1.btn.disabled = true;
  p2.btn.disabled = true;
};
