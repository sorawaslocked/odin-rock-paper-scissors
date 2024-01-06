const CHOICES = ["Rock", "Paper", "Scissors"];

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

function playSingleRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = prompt("What's your choice?");
  playerChoice = formatChoice(playerChoice);
  let isChoiceValid = validatePlayerChoice(playerChoice);

  while (isChoiceValid === false) {
    playerChoice = prompt("Enter a valid choice!");
    playerChoice = formatChoice(playerChoice);
    isChoiceValid = validatePlayerChoice(playerChoice);
  }


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
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    roundResult = playSingleRound();

    console.log("ROUND WINNER: ".concat(roundResult));

    if (roundResult === "player")
      playerScore++;
    else
      computerScore++;
  }

  if (playerScore > computerScore)
    console.log("GAME WINNER: player");
  else if (computerScore > playerScore)
    console.log("GAME WINNER: computer");
}