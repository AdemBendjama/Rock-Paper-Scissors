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

function play(playerSelection, computerSelection) {
    // format play selection
    playerSelection = playerSelection.toLowerCase();
    // display selection
    console.log(`Player selected ${playerSelection}`);
    console.log(`Computer selected ${computerSelection}`);
    // Tie
    if (playerSelection == computerSelection) {
        console.log("Tie!");
    }
    // Player selects Rock
    else if (playerSelection == "rock") {
        // Player wins, Rock beats Scissors
        if (computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors");
        }
        // Player loses, Paper beats Rock
        else {
            console.log("You Lose! Paper beats Rock");
        }
    }
    // Player selects Paper
    else if (playerSelection == "paper") {
        // Player wins, Paper beats Rock
        if (computerSelection == "rock") {
            console.log("You Win! Paper beats Rock");
        }
        // Player loses, Scissors beats Paper
        else {
            console.log("You Lose! Scissors beats Paper");
        }
    }
    // Player selects Scissors
    else if (playerSelection == "scissors") {
        // Player wins, Scissors beats Paper
        if (computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper");
        }
        // Player loses, Rock beats Scissors
        else {
            console.log("You Lose! Rock beats Scissors");
        }
    }
}
