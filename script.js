const choices = ['rock', 'paper', 'scissors'];
//define the 3 choices of the game
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

// Gets the player's choice. Reprompts until they choose
// a valid option.
function getPlayerChoice() {
    let choice = null;
    while (!choices.includes(choice)) {
        choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    }
    return choice;
}

const playerSelection = getPlayerChoice();

//prompts user to enter their choice, converts to lowercase
//currently working
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You Win";
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You Lose"
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You Win"
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You Lose"
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You Lose"
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You Win"
    }
}
//creates function to play a single round of RPS
//compare both choices, if choices equal returns tie
console.log(computerSelection);
console.log(playerSelection);
//return both choices to demonstrate it is working
console.log(playRound(playerSelection, computerSelection));
//logs the round

//still need to define the actual rules for winners
