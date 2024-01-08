import Square from "../Square/Square"
import "./board.css"
import confetti from "canvas-confetti"
import { isGameDrawn, calculateWinner } from "../../functions"
const Board = ({xIsNext,squares,onPlay, onReset}) => {
  
    const handleClick = (i) => {
        const nextSquares = squares.slice()

        if(squares[i] || calculateWinner(squares)) return
       
        xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
     
        onPlay(nextSquares)
    }


    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Ganador: " + winner;
      confetti()
    } else {
      if (isGameDrawn(squares)) {
       status = "Empate"
      }else{
        status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
      }  
    }
    return (
        <>
        
        <div className="status">{status}</div>
        <div className="board-content">
        <div className="board-row" >
          <Square value={squares[0]}  onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]}  onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]}  onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]}  onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]}  onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]}  onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]}  onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]}  onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]}  onSquareClick={() => handleClick(8)}/>
        </div>
        </div>
       
        <button 
                className="reset"
                onClick={() => onReset()}
        >
          Reset
        </button>

      </>
    )
}

export default Board









