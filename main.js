const CHOICES = ["Rock", "Paper", "Scissors"];
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const roundEndMsg = document.querySelector('#roundEndMsg');
const gameEndMsg = document.querySelector('#gameEndMsg');
const playerScoreboard = document.querySelector('#playerScore');
const computerScoreboard = document.querySelector('#computerScore');
const content = document.querySelector('.content');
const gameRestartBtn = createGameRestartButton();
let playerScore = 0, computerScore = 0;

const handleRockClick = () => {game("Rock")}
const handlePaperClick = () => {game("Paper")}
const handleScissorsClick = () => {game("Scissors")}

addButtonEventListeners();

function createGameRestartButton() {
  const gameRestartBtn = document.createElement('button');
  gameRestartBtn.classList.add('restartBtn');
  gameRestartBtn.textContent = "Restart Game";

  return gameRestartBtn;
}

function addButtonEventListeners() {
  rockBtn.addEventListener('click', handleRockClick);
  paperBtn.addEventListener('click', handlePaperClick);
  scissorsBtn.addEventListener('click', handleScissorsClick);
}

function removeButtonEventListeners() {
  rockBtn.removeEventListener('click', handleRockClick);
  paperBtn.removeEventListener('click', handlePaperClick);
  scissorsBtn.removeEventListener('click', handleScissorsClick);
}

function addButtonHover() {
  rockBtn.classList.add('hover');
  paperBtn.classList.add('hover');
  scissorsBtn.classList.add('hover');
}

function removeButtonHover() {
  rockBtn.classList.remove('hover');
  paperBtn.classList.remove('hover');
  scissorsBtn.classList.remove('hover');
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

  return roundWinner;
}

function getGameEndMsg(winner) {
  if (winner === 'player')
    gameEndMsg.textContent = "You won the game! Congrats!";
  else
    gameEndMsg.textContent = "Sadly, you lost. Better luck next time!";
}

function endGame() {
  content.appendChild(gameRestartBtn);
  removeButtonEventListeners();
  removeButtonHover();
  gameRestartBtn.addEventListener('click', restartGame);
}

function game(choice) {
  let roundWinner = playSingleRound(choice);

  if (roundWinner === 'player')
    playerScore++;
  else if (roundWinner === 'computer')
    computerScore++;

  if (playerScore === 5) {
    endGame();
    getGameEndMsg('player');
  }
  else if (computerScore === 5) {
    endGame();
    getGameEndMsg('computer');
  }
  
  playerScoreboard.textContent = "0" + playerScore;
  computerScoreboard.textContent = "0" + computerScore;
}

function restartGame() {
  playerScoreboard.textContent = "00";
  computerScoreboard.textContent = "00";
  playerScore = 0;
  computerScore = 0;
  roundEndMsg.textContent = "";
  gameEndMsg.textContent = "";
  addButtonEventListeners();
  addButtonHover();
  content.removeChild(gameRestartBtn);
}