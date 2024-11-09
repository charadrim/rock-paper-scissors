const readline = require('readline-sync');

let rock = 'rock',
  paper = 'paper',
  scissors = 'scissors';

let winningMessage = 'You win this round.',
  losingMessage = 'You lose this round.',
  tieMessage = "It's a tie.",
  errorMessage = 'Sorry, your choice is invalid.';

let humanScore = 0,
  computerScore = 0;

const getHumanChoice = () => {
  let humanOption = readline.question(
    'What is your choice? Rock, Paper or Scissors?',
  );

  let humanOptionLowerCase = humanOption.toLowerCase();

  if (humanOptionLowerCase === rock) {
    return rock;
  } else if (humanOptionLowerCase === paper) {
    return paper;
  } else if (humanOptionLowerCase === scissors) {
    return scissors;
  } else {
    return errorMessage;
  }
};

const getComputerChoice = () => {
  let computerOption = Math.floor(Math.random() * 3);

  if (computerOption === 0) {
    return rock;
  } else if (computerOption === 1) {
    return paper;
  } else if (computerOption === 2) {
    return scissors;
  }
};

const playRound = (humanSelection, computerSelection) => {
  if (
    (humanSelection === rock && computerSelection === scissors) ||
    (humanSelection === paper && computerSelection === rock) ||
    (humanSelection === scissors && computerSelection === paper)
  ) {
    humanScore++;
    return humanScore;
  } else if (
    (humanSelection === rock && computerSelection === paper) ||
    (humanSelection === paper && computerSelection === scissors) ||
    (humanSelection === scissors && computerSelection === rock)
  ) {
    computerScore++;
    return computerScore;
  } else if (
    (humanSelection === rock && computerSelection === rock) ||
    (humanSelection === paper && computerSelection === paper) ||
    (humanSelection === scissors && computerSelection === scissors)
  ) {
    return tieMessage;
  } else {
    return errorMessage;
  }
};

const playGame = () => {
  while (humanScore < 3 && computerScore < 3) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let roundResult = playRound(humanSelection, computerSelection);

    if (roundResult === tieMessage) {
      console.log(tieMessage);
    } else if (roundResult === errorMessage) {
      console.log(errorMessage);
    } else {
      if (roundResult === humanScore) {
        console.log(winningMessage);
      } else if (roundResult === computerScore) {
        console.log(losingMessage);
      }
      console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    }
  }

  if (humanScore === 3) {
    console.log('Congratulations! You won the game!');
  } else if (computerScore === 3) {
    console.log('Game over! You lost the game.');
  }
};

playGame();
