const CHOICES = ["Rock", "Paper", "Scissors"];


alert("Submit your choice through a prompt");
alert("1 is for rock, 2 is for paper, 3 is for scissors");

let userChoice = +prompt("What's your choice?");
let isChoiceValid = true;

do {
  if (userChoice != 1 && userChoice != 2 && userChoice != 3) {
    userChoice = prompt("Enter a valid choice!");
    isChoiceValid = false;
  }
  else {
    isChoiceValid = true;
  }
} while (isChoiceValid === false);


function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return CHOICES[randIndex];
}