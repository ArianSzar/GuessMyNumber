"use strict";

// Refactory & Better Readable Code
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const setNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const setHighScore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};
const setGuessValue = function (guessValue) {
  document.querySelector(".guess").value = guessValue;
};
let body = document.querySelector("body");
let numberPanel = document.querySelector(".number");

// Default Score, Highscore & Random Number Generator.
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Main Game Functionality.
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When Player enters invalid number.
  if (!guess || guess < 0) {
    displayMessage("⛔ لطفا عدد صحیحی وارد کنید!");
    //When Player Wins The Game.
  } else if (guess === secretNumber) {
    displayMessage("🎉 آفرین،درست حدس زدی");
    body.style.backgroundColor = "#60b347";
    numberPanel.style.width = "30rem";
    setNumber(secretNumber);
    // Updating Highscore.
    if (score > highscore) {
      highscore = score;
      setHighScore(highscore);
    }
    //When Player Guess Wrong or Lose the Game.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "📈 خیلی زیادتر حدس زدی!"
          : "📉 خیلی کمتر حدس زدی!"
      );
      score--;
      setScore(score);
    } else {
      displayMessage("💥 بازیو باختی!");
      setScore(0);
    }
  }
});

// The Again Button.
let again = document.querySelector(".again");
again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("شروع کن به حدس زدن...");
  setScore(score);
  setNumber("?");
  setGuessValue("");
  body.style.backgroundColor = "#222";
  numberPanel.style.width = "15rem";
});
/* Just 
For 
Fun
*/
