const Player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  }

  return {
    getSign
  };
}

const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", ""];

  const setField = (index, sign) => {
      board[index] = sign;
  }

  const getField = (index) => {
    return board[index];
  }

  const resetBoard = () => {
    // board.forEach((e) => {
    //   e = "";
    for (let i = 0; i < board.length; i++) {
      board[i] = "";
    }
    // })
  }

  return {
    setField,
    getField,
    resetBoard,
  }
})()

const displayController = (() => {
  const fieldElements = document.querySelectorAll('.field');
  const messageElement = document.getElementById('message');
  const restartButton = document.getElementById('btn-restart');
  const playerXSelection = document.getElementById('player-x-button');
  const playerOSelection = document.getElementById('player-o-button');


  playerXSelection.addEventListener('click', (e) => {
    e.target.classList.add('active');
    playerOSelection.classList.remove('active');
    gameController.setPlayer("X");
    setMessage(`Player ${gameController.getCurrentPlayerSign()}'s turn`)
  })

  playerOSelection.addEventListener('click', (e) => {
    e.target.classList.add('active');
    playerXSelection.classList.remove('active');
    gameController.setPlayer("O");
    setMessage(`Player ${gameController.getCurrentPlayerSign()}'s turn`)
  })

  fieldElements.forEach((field) => {
    field.addEventListener('click', (e) => {
      if(gameController.getIsOver() || e.target.textContent !== "") return;
      gameController.playRound(parseInt(e.target.dataset.index));
      updateBoard();
    } )
  })

  restartButton.addEventListener('click', () => {
    restart();
  })

  const setMessage = (message) => {
    messageElement.textContent = message;
  }

  const restart = () => {
    gameBoard.resetBoard();
    updateBoard();
    gameController.reset();
    setMessage(`Player ${gameController.getCurrentPlayerSign()}'s turn`)
  }

  const updateBoard = () => {
    fieldElements.forEach((field, index) => {
        field.textContent = gameBoard.getField(index);
    })
  }


  return {
    setMessage
  }


})()

const gameController = (() => {
  const playerX = Player("X");
  const playerO = Player("O");
  let player = "X";
  let isOver = false;
  let round = 1;

  const playRound = (fieldIndex) => {
    gameBoard.setField(fieldIndex, getCurrentPlayerSign());
    if(checkWinner(fieldIndex)) {
      displayController.setMessage(`Player ${getCurrentPlayerSign()} wins`);
      isOver = true;
      return;
    } 
    if(round === 9) {
      displayController.setMessage("Draw");
      isOver = true;
      return;
    }
    displayController.setMessage(`Player ${getCurrentPlayerSign()}'s turn`)

    round++;
  }

  const setPlayer = (sign) => {
    if(sign === "X"){
      player =  playerX.getSign();
    } else {
      player = playerO.getSign();
    }
    
  }

  const getCurrentPlayerSign = () => {
    if(round === 1){
      return player;
    }

    if(player === "X"){
      return round % 2 === 1 ? playerX.getSign() : playerO.getSign();
    } else {
      return round % 2 === 1 ? playerO.getSign() : playerX.getSign();
    }
    
  }

  const checkWinner = (fieldIndex) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningConditions
            .filter((conditions) => conditions.includes(fieldIndex))
            .some((possibleCombinations) => 
              possibleCombinations.every(
                (ind) => gameBoard.getField(ind) === getCurrentPlayerSign()
              )
            );

  }

  const getIsOver = () => {
    return isOver;
  }

  const reset = () => {
    round = 1;
    isOver = false;
  }


  return {
    playRound,
    getIsOver,
    reset,
    getCurrentPlayerSign,
    setPlayer,
  }
})();