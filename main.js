let playerWins = 0;
let computerWins = 0;

game();

function game() {
    // start game of 5 rounds
    // first to 3 wins
    playerWins = 0;
    computerWins = 0;
    let playerSelection;
    let computerSelection;
    for (let i = 1; i <= 5; i++) {
        //
        while (true) {
            playerSelection = prompt("Rock, Paper or Scissors ?");
            if (checkUserChoice(playerSelection)){
                break;
            }else{
                alert("Pls Enter a Valid Weapon");
            }
        }
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    // Declaring the winner of the tie based on the results of wins
    console.log("Game Results: ");
    if (playerWins == computerWins) {
        console.log("Tie Game!");
    } else if (playerWins > computerWins) {
        console.log("You Win The Game!");
    } else {
        console.log("You Lost The Game!");
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
            playerWins++;
            return "You Win! Rock beats Scissors";
        }
        // Player loses, Paper beats Rock
        else {
            computerWins++;
            return "You Lose! Paper beats Rock";
        }
    }
    // Player selects Paper
    else if (playerSelection == "paper") {
        // Player wins, Paper beats Rock
        if (computerSelection == "rock") {
            playerWins++;
            return "You Win! Paper beats Rock";
        }
        // Player loses, Scissors beats Paper
        else {
            computerWins++;
            return "You Lose! Scissors beats Paper";
        }
    }
    // Player selects Scissors
    else if (playerSelection == "scissors") {
        // Player wins, Scissors beats Paper
        if (computerSelection == "paper") {
            playerWins++;
            return "You Win! Scissors beats Paper";
        }
        // Player loses, Rock beats Scissors
        else {
            computerWins++;
            return "You Lose! Rock beats Scissors";
        }
    }
}

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

function checkUserChoice(choice) {
    choice = choice.toLowerCase();
    switch (choice) {
        case "rock":
            return true;
        case "paper":
            return true;
        case "scissors":
            return true;
        default:
            return false;
    }
}
