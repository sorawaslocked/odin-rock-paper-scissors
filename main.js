const CHOICES = ["Rock", "Paper", "Scissors"];


alert("Submit your choice through a prompt");
alert("1 is for rock, 2 is for paper, 3 is for scissors");
let userChoice = +prompt("What's your choice?");
if (userChoice != 1 && userChoice != 2 && userChoice != 3)
  console.log("Enter a valid choice!");


function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return CHOICES[randIndex];
}