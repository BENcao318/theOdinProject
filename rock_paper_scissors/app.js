const guesses = ['Rock', 'Paper', 'Scissors'];
const outcomes = ["It's a tie!", "You lose!", "You win!"];
const output = ["Paper beats rock", "Rock beats Scissors", "Scissors beats paper"];
const btn = document.querySelectorAll('.btn');
const results = document.querySelector('.results')
const playouts = document.querySelector('.playouts');
const scores = document.querySelector('.scores');
let scorePlayer = 0;
let scoreComputer = 0;

btn.forEach(button => {
  button.addEventListener('mousedown', getGuess);
  button.addEventListener('transitionend', removeClickOn);
})

function removeClickOn(b){
  // console.log(b);
  if(b.propertyName !== "transform") return;
  // console.log(b.propertyName);
  // console.log(this);
  this.classList.remove('clickOn');
}


function getGuess(e) {
  e.target.classList.add('clickOn');

  if(e.target.classList.contains('btn-rock')) {
    game('rock');
  } else if (e.target.classList.contains('btn-paper')){
    game('paper');
  } else if (e.target.classList.contains('btn-scissors')) {
    game('scissors');
  } else {
    console.log('Select a play button');
  }
}

function displayResults(output) {
  // console.log(results.childNodes)
  playouts.style.fontSize = '16px';
  playouts.textContent = `${output[0]}`
  scores.textContent = `Scores:  player ${scorePlayer}, computer ${scoreComputer}`;
  // results.childNodes.forEach(e => {
  //   console.log(e)
  // })
  
  // console.log(results.childNodes)
  if(scorePlayer === 5) {
    announceWinner('You');
  } else if (scoreComputer === 5) {
    announceWinner('The computer')
  }
}

function announceWinner(winner){
  let result = document.createElement('h1');
  result.textContent = `${winner} Win!`;
  // if(arr.includes(h1))
  if(results.childNodes.length !== 6){
    results.appendChild(result);
  }
  
  
}

function game(guess) {
  // console.log(guess)

  let output = playSingleRound(guess, computerPlay());
  if(output[1] == 1){
    scoreComputer++;
  } else if(output[1] == 2) {
    scorePlayer++;
  }

  console.log(output[0]);
  
  console.log(`Scores:  player ${scorePlayer}, computer ${scoreComputer}`);

  displayResults(output);
}

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





// game();

