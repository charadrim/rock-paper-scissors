let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';

let computerScore;
let humanScore;

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    console.log(rock);
    return rock;
  } else if (computerChoice === 1) {
    console.log(paper);
    return paper;
  } else if (computerChoice === 2) {
    console.log(scissors);
    return scissors;
  }
};

getComputerChoice();

const getHumanChoice = () => {
  let humanChoice = prompt('WHat is your choice? Rock, Paper or Scissors?');

  if (humanChoice === rock) {
    console.log(rock);
    return rock;
  } else if (humanChoice === paper) {
    console.log(paper);
    return paper;
  } else if (humanChoice === scissors) {
    console.log(scissors);
    return scissors;
  } else {
    let errorMessage = 'Sorry, your choice is invalid.';
    console.log(errorMessage);
    return errorMessage;
  }
};

getHumanChoice();
