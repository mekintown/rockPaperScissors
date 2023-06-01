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
            return "You Win! Rock beats Scissors";
        }
        else {
            return "Tied";
        }
    } 

    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
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

function game() {

    const Scores = {player: 0, computer: 0}
    for (let i = 0; i < 5; i++) {
        let n = prompt();
        console.log(playSingleRound(n, Scores));
        console.log(Scores)
    }
 }
