function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const choiceNumber = Math.floor(Math.random() * choices.length);
  return choices[choiceNumber];
}

function playRound() {
  const playerRound = prompt('Your turn');
  if ((playerRound.toLowerCase() !== 'Scissors'.toLocaleLowerCase()) && (playerRound.toLowerCase() !== 'Paper'.toLocaleLowerCase()) && (playerRound.toLowerCase() !== 'Rock'.toLocaleLowerCase())) {
    alert('You must stick to the rules!');
    return;
  }
  const computerRound = prompt('Computer round', computerPlay());
  if ((playerRound.toLowerCase() === 'Rock'.toLocaleLowerCase()) && (computerRound === 'Paper')) {
    alert('You Lose! Paper beats Rock');
  } else if ((playerRound.toLowerCase() === 'Rock'.toLocaleLowerCase()) && (computerRound === 'Scissors')) {
    alert('You Won! Rock beats Scissors');
  } else if ((playerRound.toLowerCase() === 'Paper'.toLocaleLowerCase()) && (computerRound === 'Rock')) {
    alert('You Won! Paper beats Rock');
  } else if ((playerRound.toLowerCase() === 'Paper'.toLocaleLowerCase()) && (computerRound === 'Scissors')) {
    alert('You Lose! Scissors beats Paper');
  } else if ((playerRound.toLowerCase() === 'Scissors'.toLocaleLowerCase()) && (computerRound === 'Paper')) {
    alert('You Won! Scissors beats Paper');
  } else if ((playerRound.toLowerCase() === 'Scissors'.toLocaleLowerCase()) && (computerRound === 'Rock')) {
    alert('You Lose! Rock beats Scissors');
  } else {
    alert('It\'s a draw');
  }
}

console.log(playRound());
