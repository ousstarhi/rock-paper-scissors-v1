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
function game() {
  const userRound = prompt('Your turn');
  if ((userRound.toLowerCase() !== 'Scissors'.toLocaleLowerCase()) && (userRound.toLowerCase() !== 'Paper'.toLocaleLowerCase()) && (userRound.toLowerCase() !== 'Rock'.toLocaleLowerCase())) {
    alert('You must stick to the rules!');
    game();
    return;
  }
  playRound(userRound, computerPlay());
}
function finalGame() {
  let i;
  for (i = 1; i < 6; i += 1) {
    game();
  }
  if (userScore < computerScore) {
    alert('You lost the game');
  } else if (userScore > computerScore) {
    alert('Congratulation! you defeated the computer')
  } else {
    alert('No body won and no body lost! be happy');
  }
  alert(`Your Scor is: ${userScore}`);
  alert(`The computer Score is: ${computerScore}`);
}

console.log(finalGame());
