"use strict";

let secretNumber = Math.round(Math.random() * 20);

let score = 20;
let highScore = 0;
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;
  console.log(guess);

  //When there is no input
  if (!guess) {
    displayMessage("❌No Number!");

    //When player guesses correctly
  } else if (guess === secretNumber) {
    displayMessage("✅Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to right top, #60b347, #60b34e, #5fb354, #60b35a, #60b360)";
    document.querySelector(".number").style.width = "30rem";

    //When guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "‼Too High!" : "❕Too Low!");

      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector("body").style.backgroundImage =
        "linear-gradient(to top, #8b0000, #6c0112, #4b0816, #2a0c12, #000000)";
    }
  } else {
    displayMessage("🚫You Lose!");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 20);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundImage = "";
  document.querySelector(".number").style.width = "15rem";
});
