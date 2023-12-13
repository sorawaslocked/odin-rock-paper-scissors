const CHOICES = ["rock", "paper", "scissors"];


alert("Submit your choice through a prompt");

playSingleRound();


function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return CHOICES[randIndex];
}

function validatePlayerInput(input) {
  if (input.toLowerCase() !== CHOICES[0]
    && input.toLowerCase() !== CHOICES[1]
    && input.toLowerCase() !== CHOICES[2]
    ) return false;
  return true;
}

function playSingleRound() {
  let playerChoice = prompt("What's your choice?");
  let isChoiceValid = validatePlayerInput(playerChoice);

  while (isChoiceValid === false) {
    playerChoice = prompt("Enter a valid choice");
    isChoiceValid = validatePlayerInput(playerChoice);
  }
}