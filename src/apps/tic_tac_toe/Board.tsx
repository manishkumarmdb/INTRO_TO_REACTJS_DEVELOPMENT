import { useState } from "react";
import Square from "./Square";
import type { SquareValue } from "./types/game";

function Board() {
    const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState<boolean>(true);

    const calculateWinner = (squares: SquareValue[]): SquareValue => {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : '0'}`;

    const handleSquareClick = (index: number) => {
      if (squares[index] || calculateWinner(squares)) {
        return; // Ignore click if square is already filled or if there's a winner
      }
      const nextSquares = [...squares];
      nextSquares[index] = isXNext ? 'X' : '0';
      setSquares(nextSquares);
      setIsXNext(!isXNext);
    }

    const resetGame = () => {
      setSquares(Array(9).fill(null));
      setIsXNext(true);
    }

   return (
     <div className="board">
     <button className="reset-btn" onClick={resetGame} >Reset Game</button> nbsp;
     <button className="start-btn">Start Game</button>
     <div className="game-board" >
       {/* Tic-Tac-Toe board will go here */}
        {squares.map((value, index) => (
            <Square
            key={index}
            value={value}
            onClickSquare={() => handleSquareClick(index)}
            />
        ))}
     </div>
      <div className="game-info">
        {/* Game status and winner info */}
        <p> {status} </p>
     </div>
     </div>
   )
 }
 
 export default Board;