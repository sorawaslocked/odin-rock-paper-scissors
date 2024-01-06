const CHOICES = ["Rock", "Paper", "Scissors"];

const rockBtn = document.querySelector('rockBtn');
const paperBtn = document.querySelector('paperBtn');
const scissorsBtn = document.querySelector('scissorsBtn');

addButtonEventListeners();

game()

function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return CHOICES[randIndex];
}

function formatChoice(choice) {
  choice = choice.trim();
  choice = choice.toLowerCase();
  let firstLetter = choice[0].toUpperCase();
  choice = firstLetter.concat(choice.slice(1));

  return choice;
}

function validatePlayerChoice(input) {
  if (input !== CHOICES[0]
    && input !== CHOICES[1]
    && input !== CHOICES[2]
    ) return false;
  return true;
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
  if (roundWinner === "tie") {
    console.log("TIE");
    roundWinner = playSingleRound();
  }
  else {
    if (roundWinner === "player") {
      let roundMessage = "You win. " + playerChoice + " beats " + computerChoice + ".";
      console.log(roundMessage);
    }
    else {
      let roundMessage = "You lose. " + computerChoice + " beats " + playerChoice + ".";
      console.log(roundMessage);
    }
  }
  
  return roundWinner;
}

function game() {
  
}