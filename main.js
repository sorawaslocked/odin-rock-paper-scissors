const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randIndex = Math.floor(Math.random * 3) + 1;
  return CHOICES[randIndex];
}

console.log(getComputerChoice);