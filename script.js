const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    choices[Math.floor(Math.random()*choices.length)]
}

const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
}

console.log(playRound(playerSelection, computerSelection));