const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")

const Scores = {player: 0, computer: 0}
let round = 0;

rockBtn.addEventListener('click', () => {
    playSingleRound('rock', Scores);
    updateGame();
});
paperBtn.addEventListener('click', () => {
    playSingleRound("paper", Scores);
    updateGame();
});
scissorsBtn.addEventListener('click', () => {
    playSingleRound("scissors", Scores);
    updateGame();
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) % 3
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors"
    }
}

function playSingleRound (playerSelection, scores, computerSelection=getComputerChoice()) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            scores.computer += 1;
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection == "scissors") {
            scores.player += 1;
            return "You Win! Rock beats Scissors";
        }
        else {
            return "Tied";
        }
    } 

    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            scores.computer += 1;
            scores.player += 1;
            return "You Lose! Scissors beats Paper";
        }
        else if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        }
        else {
            return "Tied";
        }
    }

    else {
        if (computerSelection == "Rock") {
            scores.computer += 1;
            scores.player += 1;
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper";
        }
        else {
            return "Tied";
        }
    }
 }

function updateGame() {
    alert(`${Scores.player} | ${Scores.computer}`);
    if (Scores.player >= 5) {
        alert("Player Win");
        restartGame()
    }
    else if (Scores.computer >= 5){
        alert("Player Lose");
        restartGame()
    }
 }

 function restartGame() {
    Scores.player = 0;
    Scores.computer = 0;
 }
