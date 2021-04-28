//// Dom variables
const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const restartButton = document.getElementById("restart");
const modal = document.querySelector(".modal");
const username = document.querySelector("#username");
let scoreboard = {
  player1: 0,
  computer: 0,
  draw: 0,
};

//Play game
function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// Show player's name
function displayUsername() {
  userScore.innerText = `${username.value}: ${scoreboard.player1}`;
}

//Computer random choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

//Get game winner
function getWinner(player1, computer) {
  if (player1 === computer) {
    return "draw";
  } else if (player1 === "rock") {
    if (computer === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (player1 === "paper") {
    if (computer === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (player1 === "scissors") {
    if (computer === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

//Display the winner
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    //Include player score
    scoreboard.player1++;
    // Show modal result
    result.innerHTML = `
        <h1 class="textWin">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
  } else if (winner === "computer") {
    //Include computer score
    scoreboard.computer++;
    //Show modal result
    result.innerHTML = `
            <h1 class="textLose">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice}</strong></p>
            `;
  } else {
    //Include draw score
    scoreboard.draw++;
    //Show modal result
    result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice}</strong></p>
        `;
  }

  //Show score
  score.innerHTML = ` <p>Player: ${scoreboard.player1}</p>
    <p>Computer: ${scoreboard.computer}</p>
    <p>Draw: ${scoreboard.draw}</p>
    `;

  modal.style.display = `block`;
}

//Clear Modal
function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

//Restart Game
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player:0</p>
    <p> Computer:0</p>
    `;
}

//Event Listeners
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
choices.forEach((choice) => choice.addEventListener("click", play));
username.addEventListener("input", displayUsername);
