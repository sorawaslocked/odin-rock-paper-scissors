const CHOICES = ["rock", "paper", "scissors"];


alert("Submit your choice through a prompt");

playSingleRound();


function getComputerChoice() {
  let randIndex = Math.floor(Math.random() * 3);
  return CHOICES[randIndex];
}

function validatePlayerInput(input) {
  if (input !== CHOICES[0]
    && input !== CHOICES[1]
    && input !== CHOICES[2]
    ) return false;
  return true;
}

function getRoundWinner(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "rock")
        return "tie";
      else if (computerChoice === "paper")
        return "computer";
      return "player";

    case "paper":
      if (computerChoice === "rock")
        return "player";
      else if (computerChoice === "paper")
        return "tie";
      return "computer";

    case "scissors":
      if (computerChoice === "rock")
        return "computer";
      else if (computerChoice === "paper")
        return "player";
      return "tie";
  }
}

function playSingleRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = prompt("What's your choice?").toLowerCase();
  let isChoiceValid = validatePlayerInput(playerChoice);

  while (isChoiceValid === false) {
    playerChoice = prompt("Enter a valid choice").toLowerCase();
    isChoiceValid = validatePlayerInput(playerChoice);
  }
  
  let roundWinner = getRoundWinner(playerChoice, computerChoice);
  if (roundWinner === "tie") {
    alert("Tie!");
    roundWinner = playSingleRound();
  }

  return roundWinner;
}