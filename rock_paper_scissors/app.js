const guesses = ['Rock', 'Paper', 'Scissors'];
const outcomes = ["It's a tie!", "You lose!", "You win!"];
const output = ["Paper beats rock", "Rock beats Scissors", "Scissors beats paper"];

function computerPlay() {
  return guesses[Math.floor(Math.random() * 3)]
}

function playSingleRound(playerSelection, computerSelection) {
  const player = playerSelection.toUpperCase();
  const computer = computerSelection.toUpperCase();
  let text = '';
  let outcome = 0;

  switch(player) {
    case 'ROCK':
      if(computer === 'ROCK') {
        text = outcomes[0];
        outcome = 0;
      } else if (computer === 'PAPER') {
        text = outcomes[1] + ' ' + output[0];
        outcome = 1;
      } else if (computer === 'SCISSORS') {
        text = outcomes[2] + ' ' + output[1];
        outcome = 2;
      }
      break;
    case 'PAPER':
      if(computer === 'ROCK') {
        text = outcomes[2] + ' ' + output[0];
        outcome = 2;
      } else if (computer === 'PAPER') {
        text = outcomes[0];
        outcome = 0;
      } else if (computer === 'SCISSORS') {
        text = outcomes[1] + ' ' + output[2];
        outcome = 1;
      }
      break;
    case 'SCISSORS':
      if(computer === 'ROCK') {
        text = outcomes[1] + ' ' + output[1];
        outcome = 1;
      } else if (computer === 'PAPER') {
        text = outcomes[2] + ' ' + output[2];
        outcome = 2;
      } else if (computer === 'SCISSORS') {
        text = outcomes[0];
        outcome = 0;
      }
      break;
    default:
      text = "Please input rock, paper or scissors";
  }
  console.log(player, computer);
  return [text, outcome];
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;



  for(let i = 0; i < 5; i++) {
    let guess = window.prompt('Please input rock, paper or scissors');
      
    let output = playSingleRound(guess, computerPlay());
    if(output[1] == 1){
      scoreComputer++;
    } else if(output[1] == 2) {
      scorePlayer++;
    }

    console.log(output[0])
    
    console.log(`Scores:  player ${scorePlayer}, computer ${scoreComputer}`);
  }
}

game();
