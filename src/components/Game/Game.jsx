import { useState } from "react";
import Board from "../Board/Board";

import "./game.css"
const Game = () => {
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove] = useState(0)
    const xIsNext = currentMove % 2 === 0
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);

    }

    const jumpTo = (nextMove) => setCurrentMove(nextMove)
    
    
    const handleReset = () => {
        setHistory([Array(9).fill(null)])
        setCurrentMove(0)
    }

    const moves = history.map((squares, move) => {
       let description = move > 0 ? 'Ir al movimiento #' + move : 'Ir al inicio del juego';

        return (
          <li key={move}>
            <button className="description" onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });
    return  (
      <div className="game">    
          <div className="game-board">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} onReset={handleReset}/>
          </div>
          <div className="game-info">
            <ol>{moves}</ol>
          </div>
        </div>
      );
}

export default Game



