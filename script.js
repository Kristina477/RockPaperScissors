const hand = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return hand[Math.floor(Math.random() * hand.length)];
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
let playerChoice;

rockBtn.addEventListener("click", () => {
  playerChoice = rockBtn.value;
  playGame();
});

paperBtn.addEventListener("click", () => {
  playerChoice = paperBtn.value;
  playGame();
});

scissorsBtn.addEventListener("click", () => {
  playerChoice = scissorsBtn.value;
  playGame();
});

let playerScore = 0;
let computerScore = 0;

const para = document.createElement("div");
const scoreTag = document.createElement("div");
const body = document.body;

function playGame() {
  const computerChoice = getComputerChoice();
  if (computerScore === 4) {
    body.innerHTML = "<h2>YOU LOSE!</h2>";
  } else if (playerScore === 4) {
    body.innerHTML = "<h2>YOU WIN!</h2>";
  } else {
    if (playerChoice === "paper") {
      if (computerChoice === "paper") {
        para.innerText = "paper vs. paper. It's a tie";
      } else if (computerChoice === "rock") {
        para.innerText = "paper vs. rock. You win this round!";
        playerScore++;
      } else if (computerChoice === "scissors") {
        para.innerText = "paper vs. scissors. You lose this round!";
        computerScore++;
      }
    } else if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        para.innerText = "rock vs. paper. You lose this round!";
        computerScore++;
      } else if (computerChoice === "rock") {
        para.innerText = "rock vs. rock. It's a tie";
      } else if (computerChoice === "scissors") {
        para.innerText = "rock vs. scissors. You win this round!";
        playerScore++;
      }
    } else if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        para.innerText = "scissors vs. paper. You win this round!";
        playerScore++;
      } else if (computerChoice === "rock") {
        para.innerText = "scissors vs. rock. You lose this round!";
        computerScore++;
      } else if (computerChoice === "scissors") {
        para.innerText = "scissors vs. scissors. It's a tie";
      }
    }
    scoreTag.innerText = `You: ${playerScore} vs. Computer: ${computerScore}`;
    document.body.appendChild(para);
    document.body.appendChild(scoreTag);
  }
}
