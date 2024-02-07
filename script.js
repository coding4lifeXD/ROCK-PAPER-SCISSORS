// declaring starter variables
let playerOneScore = 0;
let playerTwoScore = 0;
let selectorBtn = document.getElementById("selectorBtn");
let html = document.documentElement;
let playerOneScoreOutput = document.getElementById("player1Score");
let playerTwoScoreOutput = document.getElementById("player2Score");
let playerOneOutput = document.getElementById("player1Out");
let playerTwoOutput = document.getElementById("player2Out");

function choose() {
  // preventing the addition of bigBackground class until button is pressed
  if (playerOneOutput.class != "bigBackground") {
    playerOneOutput.setAttribute("class", "bigBackground");
    playerTwoOutput.setAttribute("class", "bigBackground");
  }
  let playerOneRandomNum = Math.round(Math.random() * 2);
  let playerTwoRandomNum = Math.round(Math.random() * 2);

  let rockPaperScissorsArray = [
    {
      img: "Paper.webp",
      type: "Paper",
    },
    {
      img: "Rock Photo.png",
      type: "Rock",
    },
    {
      img: "Scissors.png",
      type: "Scissors",
    },
  ];
  // winning combos to determine who won, where the first item shows what the playerOne got, and the second showing what the playerTwo got
  let winningCombos = ["Paper Rock", "Rock Scissors", "Scissors Paper"];

  // if player one wins, we increase playerOne Score by one
  if (
    winningCombos.includes(
      `${rockPaperScissorsArray[playerOneRandomNum].type} ${rockPaperScissorsArray[playerTwoRandomNum].type}`
    )
  ) {
    alert(
      ` Player ONE WON!!! \n Player 1 Weapon: ${rockPaperScissorsArray[playerOneRandomNum].type} \n Player 2 Weapon:  ${rockPaperScissorsArray[playerTwoRandomNum].type}`
    );
    playerOneScore++;
    playerOneScoreOutput.textContent = playerOneScore;
  }
  // if nobody wins, score remains the same
  else if (
    rockPaperScissorsArray[playerOneRandomNum].type ==
    rockPaperScissorsArray[playerTwoRandomNum].type
  ) {
    alert("NOBODY WON!!!!");
  }
  // if player two wins, we increase playerTwo Score by One
  else {
    alert(
      ` Player TWO WON!!! \n Player 2 Weapon: ${rockPaperScissorsArray[playerTwoRandomNum].type} \n Player 1 Weapon:  ${rockPaperScissorsArray[playerOneRandomNum].type}`
    );
    playerTwoScore++;
    playerTwoScoreOutput.textContent = playerTwoScore;
  }
  // updating innerHTML of both playerOutputs
  playerOneOutput.innerHTML = `<p>Player One</p><img src="${rockPaperScissorsArray[playerOneRandomNum].img}"><p>Weapon: ${rockPaperScissorsArray[playerOneRandomNum].type}</p>`;
  playerTwoOutput.innerHTML = `<p>Player Two</p><img src="${rockPaperScissorsArray[playerTwoRandomNum].img}"><p>Weapon: ${rockPaperScissorsArray[playerTwoRandomNum].type}</p>`;
}

// adding choose function tp click event listener to selectorBtn
selectorBtn.addEventListener("click", choose);
