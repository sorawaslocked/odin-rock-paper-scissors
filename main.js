const CHOICES = ["Rock", "Paper", "Scissors"];


alert("Submit your choice through a prompt");
alert("1 is for rock, 2 is for paper, 3 is for scissors");

playSingleRound();


function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return CHOICES[randIndex];
}

function validateUserInput(input) {
  if (input != 1 && input != 2 && input != 3)
    return false;
  return true;
}

function playSingleRound() {
  let userChoice = +prompt("What's your choice?");
  let isChoiceValid = validateUserInput(userChoice);

  while (isChoiceValid === false) {
    userChoice = +prompt("Enter a valid choice");
    isChoiceValid = validateUserInput(userChoice);
  }
}