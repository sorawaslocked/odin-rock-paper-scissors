const CHOICES = ["Rock", "Paper", "Scissors"];

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

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

function playSingleRound(playerChoice) {
  let computerChoice = getComputerChoice();

  let roundWinner = getRoundWinner(playerChoice, computerChoice);
  // if (roundWinner === "tie") {
  //   console.log("TIE");
  // }
  // else {
  //   if (roundWinner === "player") {
  //     let roundMessage = "You win. " + playerChoice + " beats " + computerChoice + ".";
  //     console.log(roundMessage);
  //   }
  //   else {
  //     let roundMessage = "You lose. " + computerChoice + " beats " + playerChoice + ".";
  //     console.log(roundMessage);
  //   }
  // }
  console.log(playerChoice);
  console.log(computerChoice);
  console.log(roundWinner);
  console.log("")

  return roundWinner;
}

function game() {
  playSingleRound();
}