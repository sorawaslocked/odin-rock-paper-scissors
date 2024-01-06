const CHOICES = ["Rock", "Paper", "Scissors"];

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const roundEndMsg = document.querySelector('#roundEndMsg');
const gameEndMsg = document.querySelector('#gameEndMsg');
const scoreboard = document.querySelector('#score');
let playerScore = 0, computerScore = 0;

addButtonEventListeners();

function addButtonEventListeners() {
  rockBtn.addEventListener('click', () => {
    playSingleRound("Rock");
  });
  paperBtn.addEventListener('click', () => {
    playSingleRound("Paper");
  });
  scissorsBtn.addEventListener('click', () => {
    playSingleRound("Scissors");
  });
}

function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return CHOICES[randIndex];
}

function getRoundWinner(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "Rock":
      if (computerChoice === "Rock")
        return "tie";
      else if (computerChoice === "Paper")
        return "computer";
      return "player";

    case "Paper":
      if (computerChoice === "Rock")
        return "player";
      else if (computerChoice === "Paper")
        return "tie";
      return "computer";

    case "Scissors":
      if (computerChoice === "Rock")
        return "computer";
      else if (computerChoice === "Paper")
        return "player";
      return "tie";
  }
}

function getRoundEndMsg(roundWinner, playerChoice, computerChoice) {
  if (roundWinner === 'player')
    return "You win. " + playerChoice + " beats " + computerChoice + ".";
  else if (roundWinner === "computer") 
    return "You lose. " + computerChoice + " beats " + playerChoice + ".";
  return "Tie!";
}

function playSingleRound(playerChoice) {
  let computerChoice = getComputerChoice();

  let roundWinner = getRoundWinner(playerChoice, computerChoice);
  roundEndMsg.textContent = getRoundEndMsg(roundWinner, playerChoice, computerChoice);
  
  console.log(playerChoice);
  console.log(computerChoice);
  console.log(roundWinner);
  console.log("")

  return roundWinner;
}

function game() {
}