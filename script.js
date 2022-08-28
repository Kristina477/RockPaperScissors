let hand = ["rock", "paper", "scissors"];

function getComputerChoice () {
    computerChoice = hand[Math.floor(Math.random() * hand.length)];
    return computerChoice;
}

function getPlayerChoice () {
    playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
    return playerChoice;
}

let score = 0;

function playRound () {
    getPlayerChoice();
    getComputerChoice();
    if (playerChoice === "paper") {
        if (computerChoice === "paper") {
            console.log("paper vs. paper. It's a tie");
        } else if (computerChoice === "rock") {
            console.log("paper vs. rock. You win!");
            score++;
        } else if (computerChoice === "scissors") {
            console.log("paper vs. scissors. You lose!");
            score--;
        }
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("rock vs. paper. You lose!");
            score--;
        } else if (computerChoice === "rock") {
            console.log("rock vs. rock. It's a tie");
        } else if (computerChoice === "scissors") {
            console.log("rock vs. scissors. You win!");
            score++;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("scissors vs. paper. You win!");
            score++;
        } else if (computerChoice === "rock") {
            console.log("scissors vs. rock. You lose!");
            score--;
        } else if (computerChoice === "scissors") {
            console.log("scissors vs. scissors. It's a tie");
        }
    } else {
        console.log("Input invalid");
    }
}

for (let i = 1; i < 6; i++) {
    playRound();
}

if (score > 0) {
    console.log("YOU WIN!")
} else if (score = 0) {
    console.log("IT'S A TIE!")
} else {
    console.log("YOU LOSE!")
}