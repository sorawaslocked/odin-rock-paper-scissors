const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return CHOICES[randIndex];
}