const choices = ['rock', 'paper', 'scissors'];
//define the 3 choices of the game
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}
//function for the computer to choose a random selection
//currently not working, tested
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

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
console.log(playRound(playerSelection, computerSelection));
//logs the round

//still need to define the actual rules for winners
