//randomly return rock, paper or scissors.
//generate a random number
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  //map each number to either rock/paper/scissor
  let computerChoice = "";
  if (randomNumber >= 0 && randomNumber <= 30) {
    computerChoice = "rock";
  } else if (randomNumber >= 31 && randomNumber <= 50) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
  return computerChoice;
}

//get user input
function getHumanChoice() {
  const userChoice = prompt("Rock, paper or scissors?");
  return userChoice;
}

function playGame() {
  //initialise score to 0
  let humanScore = 0;
  let computerScore = 0;

  //create function to play 1 round
  function playRound(humanChoice, computerChoice) {
    const human = String(humanChoice).trim().toLowerCase();
    const computer = String(computerChoice).trim().toLowerCase();

    if (human === computer) {
      console.log("It's a draw!");
      return;
    }
    if (human == "scissors" && computer == "paper") {
      console.log("You win! Scissors beats paper");
      humanScore++;
    } else if (human == "scissors" && computer == "rock") {
      console.log("You Lose! Rocks beats scissors");
      computerScore++;
    } else if (human == "rock" && computer == "scissors") {
      console.log("You win! rock beats scissors");
      humanScore++;
    } else if (human == "rock" && computer == "paper") {
      console.log("You Lose! Paper beats rock");
      computerScore++;
    } else if (human == "paper" && computer == "rock") {
      console.log("You win! paper beats rock");
      humanScore++;
    } else if (human == "paper" && computer == "scissors") {
      console.log("You Lose! scissors beats paper");
      computerScore++;
    } else {
      console.log("Invalid choice!");
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  //announce winnter
  if (humanScore > computerScore) {
    console.log(`You win! ${humanScore}-${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose! ${computerScore}-${humanScore}`);
  } else {
    console.log(`Game is tied ${humanScore}-${computerScore}`);
  }
}

playGame();
