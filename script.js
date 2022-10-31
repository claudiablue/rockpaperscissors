const choices = ['rock', 'paper', 'scissors'];
//define the 3 choices of the game
function getComputerChoice() {
    choices[Math.floor(Math.random()*choices.length)]
}
//function for the computer to choose a random selection
const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
//prompts user to enter their choice, converts to lowercase
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
}
//creates function to play a single round of RPS
console.log(playRound(playerSelection, computerSelection));
//logs the round

//still need 