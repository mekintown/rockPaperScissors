const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const scoreVal = document.querySelector(".scoreVal");
const reportMessage = document.querySelector(".reportMessage");
const robotHand = document.querySelector(".robotHand")

const Scores = {player: 0, computer: 0}
let round = 0;

rockBtn.addEventListener('click', () => {
    reportMessage.textContent = playSingleRound('rock', Scores);
    updateGame();
});
paperBtn.addEventListener('click', () => {
    reportMessage.textContent = playSingleRound("paper", Scores);
    updateGame();
});
scissorsBtn.addEventListener('click', () => {
    reportMessage.textContent = playSingleRound("scissors", Scores);
    updateGame();
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) % 3
    switch(choice) {
        case 0:
            robotHand.className = 'fa-solid fa-hand-back-fist fa-2xl robotHand'
            return "rock";
        case 1:
            robotHand.className = 'fa-solid fa-hand  fa-2xl robotHand'
            return "paper";
        default:
            robotHand.className = 'fa-solid fa-hand-scissors fa-2xl robotHand'
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
            return "You Lose! Scissors beats Paper";
        }
        else if (computerSelection == "rock") {
            scores.player += 1;
            return "You Win! Paper beats Rock";
        }
        else {
            return "Tied";
        }
    }

    else {
        if (computerSelection == "Rock") {
            scores.computer += 1;
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == "paper") {
            scores.player += 1;
            return "You Win! Scissors beats Paper";
        }
        else {
            return "Tied";
        }
    }
 }

function updateGame() {
    scoreVal.textContent = `${Scores.player} - ${Scores.computer}`
    if (Scores.player >= 5) {
        reportMessage.textContent = "You Win. Play Agian?";
        restartGame()
    }
    else if (Scores.computer >= 5){
        reportMessage.textContent = "You Lose. Play Agian?";
        restartGame()
    }
 }

 function restartGame() {
    Scores.player = 0;
    Scores.computer = 0;
 }
