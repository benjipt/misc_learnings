const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'paper' || userInput === 'paper') {
     return userInput;
   } else { console.log('Invalid Entry');
   }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game is a tie.';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer wins :(';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer wins :(';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins :(';
    } else {
      return 'You won!';
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()
