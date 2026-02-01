import './TicTacToe.css'

function TicTacToe() {
  return (
    <div className="app-content">
    <h2>Tic-Tac-Toe Game</h2>
    <p>Play the classic Tic-Tac-Toe game!</p>
    <button className="reset-btn">Reset Game</button> nbsp;
    <button className="start-btn">Start Game</button>
    <div className="game-board" >
      {/* Tic-Tac-Toe board will go here */}
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
    <div className="game-board" >
      {/* Tic-Tac-Toe board will go here */}
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
    <div className="game-board" >
      {/* Tic-Tac-Toe board will go here */}
      <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button>
    </div>
    </div>
  )
}

export default TicTacToe;