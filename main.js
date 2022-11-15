function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors"

    }
}

function playRound(playerSelection, computerSelection) {
    // format play selection
    playerSelection = playerSelection.toLowerCase();
    // Tie
    if (playerSelection == computerSelection) {
        return "Tie!";
    }
    // Player selects Rock
    else if (playerSelection == "rock") {
        // Player wins, Rock beats Scissors
        if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors";
        }
        // Player loses, Paper beats Rock
        else {
            return "You Lose! Paper beats Rock";
        }
    }
    // Player selects Paper
    else if (playerSelection == "paper") {
        // Player wins, Paper beats Rock
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        }
        // Player loses, Scissors beats Paper
        else {
            return "You Lose! Scissors beats Paper";
        }
    }
    // Player selects Scissors
    else if (playerSelection == "scissors") {
        // Player wins, Scissors beats Paper
        if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper";
        }
        // Player loses, Rock beats Scissors
        else {
            return "You Lose! Rock beats Scissors";
        }
    }
}

console.log(playRound("paper",getComputerChoice()));