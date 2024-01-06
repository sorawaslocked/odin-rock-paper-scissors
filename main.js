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
    game("Rock");
  });
  paperBtn.addEventListener('click', () => {
    game("Paper");
  });
  scissorsBtn.addEventListener('click', () => {
    game("Scissors");
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

function endGame(winner) {
  if (winner === 'player')
    gameEndMsg.textContent = "You won the game! Congrats!";
  else
    gameEndMsg.textContent = "Sadly, you lost. Better luck next time!";
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function game(choice) {
  let roundWinner = playSingleRound(choice);

  if (roundWinner === 'player')
    playerScore++;
  else if (roundWinner === 'computer')
    computerScore++;
  
  if (playerScore === 5)
    endGame('player');
  else if (computerScore === 5)
    endGame('computer');
  
  scoreboard.textContent = playerScore + " : " + computerScore;
}