import { useState } from "react";
import Popup from "./Popup";
import "../Game.css";
const Game = () => {
  //State
  const [turn, setTurn] = useState("O");
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [winner,setWinner] = useState('')
  //functions
  function changeTurn(index) {
    if (squares[index] !== "" || winner) {
      return;
    }
    if (turn === "O") {
      setTurn("X");
    } else {
      setTurn("O");
    }
    //take a copy from squares
    const cells = [...squares];
    cells[index] = turn;
    setSquares(cells);
    if (
        (cells[0] && cells[0] === cells[1] && cells[0] === cells[2]) ||
        (cells[3] && cells[3] === cells[4] && cells[3] === cells[5]) ||
        (cells[6] && cells[6] === cells[7] && cells[6] === cells[8]) ||
        (cells[0] && cells[0] === cells[3] && cells[0] === cells[6]) ||
        (cells[1] && cells[1] === cells[4] && cells[1] === cells[7]) ||
        (cells[2] && cells[2] === cells[5] && cells[2] === cells[8]) ||
        (cells[0] && cells[0] === cells[4] && cells[0] === cells[8]) ||
        (cells[2] && cells[2] === cells[4] && cells[2] === cells[6])
      ) {
        setWinner(turn)
      }
  }
  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setWinner(null);
    setTurn("O");
  };
  //components
  const Sqr = ({ text, index }) => {
    return (
      <span
        className="gridItem"
        onClick={() => {
          changeTurn(index);
        }}
      >
        {text}
      </span>
    );
  };
  return (
    <>
      <h2 className="turnDisplay">turn: {turn}</h2>
      <div className="container">
        <Sqr index={0} text={squares[0]} />
        <Sqr index={1} text={squares[1]} />
        <Sqr index={2} text={squares[2]} />
        <Sqr index={3} text={squares[3]} />
        <Sqr index={4} text={squares[4]} />
        <Sqr index={5} text={squares[5]} />
        <Sqr index={6} text={squares[6]} />
        <Sqr index={7} text={squares[7]} />
        <Sqr index={8} text={squares[8]} />
      </div>
      <button className="resetBtn" onClick={resetGame}>Reset</button>
      {winner && <Popup winner={winner} resetGame={resetGame}/>}
    </>
  );
};

export default Game;
