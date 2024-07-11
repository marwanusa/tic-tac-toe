import "../Popup.css";
const Popup = ({ winner, resetGame }) => {
  return (
    <div className="popup">
      <h2>{`Player ${winner} is the winner!`}</h2>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default Popup;
