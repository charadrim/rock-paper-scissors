const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    let rock = 'Rock';
    console.log(rock);
    return rock;
  } else if (computerChoice === 1) {
    let paper = 'Paper';
    console.log(paper);
    return paper;
  } else if (computerChoice === 2) {
    let scissors = 'Scissors';
    console.log(scissors);
    return scissors;
  }
};

getComputerChoice();
