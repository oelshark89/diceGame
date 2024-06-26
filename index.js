function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

window.onload = function () {
  var player1 = getRandomNumber();
  var player2 = getRandomNumber();
  if (player1 > player2) {
    document.querySelector("h1").textContent = "Player 1 Wins!🚩";
    document
      .querySelector(".img1")
      .setAttribute("src", "./images/dice" + player1 + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "./images/dice" + player2 + ".png");
  } else if (player1 < player2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
    document
      .querySelector(".img1")
      .setAttribute("src", "./images/dice" + player1 + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "./images/dice" + player2 + ".png");
  } else {
    document.querySelector("h1").textContent = "Draw!";
    document
      .querySelector(".img1")
      .setAttribute("src", "./images/dice" + player1 + ".png");
    document
      .querySelector(".img2")
      .setAttribute("src", "./images/dice" + player2 + ".png");
  }
};
