"use strict";

const rollDice = document.querySelector(".roll-dice");
let currentScoresP1 = document.querySelector(".current-scores-player1");
let currentScoresP2 = document.querySelector(".current-scores-player2");
let permanentScoresP1 = document.querySelector(".permanent-scores-player1");
let permanentScoresP2 = document.querySelector(".permanent-scores-player2");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let turn = player1.classList.add("player-turn");
let dice = document.querySelector(".dice");
let hodlBtn = document.querySelector(".hodl");
let randomNumber;
const btnNewGame = document.querySelector(".new-game");

const checkWinner = () => {
  if (
    Number(currentScoresP1.textContent) +
      Number(permanentScoresP1.textContent) >=
    100
  ) {
    permanentScoresP1.textContent =
      Number(currentScoresP1.textContent) +
      Number(permanentScoresP1.textContent);
    // player1.style = 'background-color: seagreen';
    player1.classList.add("winner");
    hodlBtn.removeEventListener("click", hodlFunction);
    rollDice.removeEventListener("click", diceRollFunction);
    dice.classList.contains("hidden") ? "" : dice.classList.add("hidden");
  } else if (Number(currentScoresP1.textContent) >= 100) {
    permanentScoresP1.textContent =
      Number(currentScoresP1.textContent) +
      Number(permanentScoresP1.textContent);
    // player1.style = 'background-color: seagreen';
    player1.classList.add("winner");
    hodlBtn.removeEventListener("click", hodlFunction);
    rollDice.removeEventListener("click", diceRollFunction);
    dice.classList.contains("hidden") ? "" : dice.classList.add("hidden");
  } else if (Number(permanentScoresP1.textContent) >= 100) {
    permanentScoresP1.textContent =
      Number(currentScoresP1.textContent) +
      Number(permanentScoresP1.textContent);
    // player1.style = 'background-color: seagreen';
    player1.classList.add("winner");
    hodlBtn.removeEventListener("click", hodlFunction);
    rollDice.removeEventListener("click", diceRollFunction);
    dice.classList.contains("hidden") ? "" : dice.classList.add("hidden");
  } else if (
    Number(currentScoresP2.textContent) +
      Number(permanentScoresP2.textContent) >=
    100
  ) {
    permanentScoresP2.textContent =
      Number(currentScoresP2.textContent) +
      Number(permanentScoresP2.textContent);
    // player2.style = 'background-color: seagreen';
    player2.classList.add("winner");
    hodlBtn.removeEventListener("click", hodlFunction);
    rollDice.removeEventListener("click", diceRollFunction);
    dice.classList.contains("hidden") ? "" : dice.classList.add("hidden");
  } else if (Number(currentScoresP2.textContent) >= 100) {
    permanentScoresP2.textContent =
      Number(currentScoresP2.textContent) +
      Number(permanentScoresP2.textContent);
    // player2.style = 'background-color: seagreen';
    player2.classList.add("winner");
    hodlBtn.removeEventListener("click", hodlFunction);
    rollDice.removeEventListener("click", diceRollFunction);
    dice.classList.contains("hidden") ? "" : dice.classList.add("hidden");
  } else if (Number(permanentScoresP2.textContent) >= 100) {
    permanentScoresP2.textContent = currentScoresP2.textContent;
    // player2.style = 'background-color: seagreen';
    player2.classList.add("winner");
    hodlBtn.removeEventListener("click", hodlFunction);
    rollDice.removeEventListener("click", diceRollFunction);
    dice.classList.contains("hidden") ? "" : dice.classList.add("hidden");
  }
};

const diceRollFunction = function () {
  document.querySelector(".dice").classList.contains("hidden")
    ? document.querySelector(".dice").classList.remove("hidden")
    : "";
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.textContent = randomNumber;
  if (randomNumber === 1) {
    if (player1.classList.contains("player-turn")) {
      currentScoresP1.textContent = 0;
      hodlFunction();
      dice.textContent = 1;
    } else if (player2.classList.contains("player-turn")) {
      currentScoresP2.textContent = 0;
      hodlFunction();
      dice.textContent = 1;
    }
  } else {
    if (player1.classList.contains("player-turn")) {
      currentScoresP1.textContent =
        randomNumber + Number(currentScoresP1.textContent);
    } else if (player2.classList.contains("player-turn")) {
      currentScoresP2.textContent =
        randomNumber + Number(currentScoresP2.textContent);
    }
  }
  checkWinner();
};

const hodlFunction = function () {
  dice.textContent = 0;
  if (player1.classList.contains("player-turn")) {
    player1.classList.remove("player-turn");
    console.log("Reached Here");
    player2.classList.add("player-turn");
    permanentScoresP1.textContent =
      Number(currentScoresP1.textContent) +
      Number(permanentScoresP1.textContent);
    currentScoresP1.textContent = 0;
  } else if (player2.classList.contains("player-turn")) {
    player2.classList.remove("player-turn");
    player1.classList.add("player-turn");
    permanentScoresP2.textContent =
      Number(currentScoresP2.textContent) +
      Number(permanentScoresP2.textContent);
    currentScoresP2.textContent = 0;
  }
};

rollDice.addEventListener("click", diceRollFunction);

hodlBtn.addEventListener("click", hodlFunction);

btnNewGame.addEventListener("click", function () {
  currentScoresP1.textContent = 0;
  currentScoresP2.textContent = 0;
  permanentScoresP1.textContent = 0;
  permanentScoresP2.textContent = 0;
  // player1.style = `background: rgba(231, 157, 157, 0.46);`;
  // player2.style = `background: rgba(231, 157, 157, 0.76);`;

  dice.classList.contains("hidden") ? "" : dice.classList.add("hidden");

  // hodlBtn.removetListener('click', hodlFunction);
  // rollDice.removeEventListener('click', diceRollFunction);

  hodlBtn.addEventListener("click", hodlFunction);
  rollDice.addEventListener("click", diceRollFunction);

  player2.classList.contains("player-turn")
    ? player2.classList.remove("player-turn")
    : "";
  player1.classList.contains("player-turn")
    ? ""
    : player1.classList.add("player-turn");

  // document.querySelector('.player-turn').style =
  //   'background-color:rgba(204, 204, 204, 0.7);';
  player1.classList.remove("winner");
  player2.classList.remove("winner");
});
