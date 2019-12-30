const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let userScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = [];
  choices.push(rock, paper, scissors);
  const choiceNumber = Math.floor(Math.random() * choices.length);
  return choices[choiceNumber];
}

function playRound(playerSelection, computerSelection) {
  if ((playerSelection.toLowerCase() === 'Rock'.toLocaleLowerCase()) && (computerSelection === 'Paper')) {
    alert(`The computer selection is ${computerSelection}`);
    alert('You Lose! Paper beats Rock');
    computerScore += 1;
  } else if ((playerSelection.toLowerCase() === 'Rock'.toLocaleLowerCase()) && (computerSelection === 'Scissors')) {
    alert(`The computer selection is ${computerSelection}`);
    alert('You Won! Rock beats Scissors');
    userScore += 1;
  } else if ((playerSelection.toLowerCase() === 'Paper'.toLocaleLowerCase()) && (computerSelection === 'Rock')) {
    alert(`The computer selection is ${computerSelection}`);
    alert('You Won! Paper beats Rock');
    userScore += 1;
  } else if ((playerSelection.toLowerCase() === 'Paper'.toLocaleLowerCase()) && (computerSelection === 'Scissors')) {
    alert(`The computer selection is ${computerSelection}`);
    alert('You Lose! Scissors beats Paper');
    computerScore += 1;
  } else if ((playerSelection.toLowerCase() === 'Scissors'.toLocaleLowerCase()) && (computerSelection === 'Paper')) {
    alert(`The computer selection is ${computerSelection}`);
    alert('You Won! Scissors beats Paper');
    userScore += 1;
  } else if ((playerSelection.toLowerCase() === 'Scissors'.toLocaleLowerCase()) && (computerSelection === 'Rock')) {
    alert(`The computer selection is ${computerSelection}`);
    alert('You Lose! Rock beats Scissors');
    computerScore += 1;
  } else {
    alert(`The computer selection is ${computerSelection}`);
    alert('It\'s a draw');
  }
}