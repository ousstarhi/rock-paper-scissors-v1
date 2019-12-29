function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const choiceNumber = Math.floor(Math.random() * choices.length);
  return choices[choiceNumber];
}
Console.log(computerPlay());
