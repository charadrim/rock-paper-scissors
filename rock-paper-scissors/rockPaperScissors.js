let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

let computerScore = 0;
let humanScore = 0;

const getComputerChoice = () => {
  let computerOption = Math.floor(Math.random() * 3);

  if (computerOption === 0) {
    console.log(rock);
    return rock;
  } else if (computerOption === 1) {
    console.log(paper);
    return paper;
  } else if (computerOption === 2) {
    console.log(scissors);
    return scissors;
  }
};

const getHumanChoice = () => {
  let humanOption = prompt('What is your choice? Rock, Paper or Scissors?');

  let humanOptionLowerCase = humanOption.toLowerCase();

  if (humanOptionLowerCase === rock) {
    console.log(rock);
    return rock;
  } else if (humanOptionLowerCase === paper) {
    console.log(paper);
    return paper;
  } else if (humanOptionLowerCase === scissors) {
    console.log(scissors);
    return scissors;
  } else {
    let errorMessage = 'Sorry, your choice is invalid.';
    console.log(errorMessage);
    return errorMessage;
  }
};

const playRound = (humanChoice, computerChoice) => {
  let winningMessage = 'You win this round.';
  let losingMessage = 'You lose this round.';
  let tieMessage = "It's a tie.";

  if (humanChoice === rock && computerChoice === scissors) {
    console.log(winningMessage);
    return winningMessage;
  } else if (humanChoice === rock && computerChoice === paper) {
    console.log(losingMessage);
    return losingMessage;
  } else if (humanChoice === paper && computerChoice === rock) {
    console.log(winningMessage);
    return winningMessage;
  } else if (humanChoice === paper && computerChoice === scissors) {
    console.log(losingMessage);
    return losingMessage;
  } else if (humanChoice === scissors && computerChoice === rock) {
    console.log(losingMessage);
    return losingMessage;
  } else if (humanChoice === scissors && computerChoice === paper) {
    console.log(winningMessage);
    return winningMessage;
  } else {
    console.log(tieMessage);
    return tieMessage;
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
