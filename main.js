let playerWins = 0;
let computerWins = 0;
let rounds = 0;
const roundsDisplay = document.querySelector(".rounds span");
const userScore = document.querySelector(".score .user-score");
const computerScore = document.querySelector(".score .computer-score");
const gameResult = document.querySelector(".score .game-result");



function game(playerSelection, computerSelection) {
    // start game of 5 rounds
    // first to 3 wins
    if (rounds == 0) {
        //
        userScore.innerText = `You: ${0}`;
        computerScore.innerText = `AI: ${0}`;
    }

    let result = playRound(playerSelection, computerSelection);

    if (result.startsWith("You Win!")) {
        userScore.innerText = `You: ${playerWins}`;

    } else if (result.startsWith("You Lose!")) {
        computerScore.innerText = `AI: ${computerWins}`;

    }

    gameResult.innerText = `${result}`;
<<<<<<< HEAD

=======
    
>>>>>>> rps-ui
    rounds++;
    roundsDisplay.innerText = `Round: 0${rounds}`;

    if (rounds == 5 || playerWins == 3 || computerWins == 3) {
        // Declaring the winner of the tie based on the results of wins

        if (playerWins == computerWins) {
            result = "Tie Game!";
            gameResult.innerText = `${result}`;
        }
        else if (playerWins > computerWins) {
            result = "You Win The Game!";
            gameResult.innerText = `${result}`;
        }
        else {
            result = "You Lost The Game!";
            gameResult.innerText = `${result}`;
        }

        //
        playerWins = 0;
        computerWins = 0;
        rounds = 0;
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
    //
    let random = Math.floor(Math.random() * 3) + 1;
    //
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
    //
    choice = choice.toLowerCase();
    //
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
