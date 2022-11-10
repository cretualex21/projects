import React from "react";
function Score({ score }) {
  return (
    <div className="score-wrapper">
      {/* Game name wrapper*/}
      <div className="score-wrapper__game-text">
        <p>rock</p>
        <p>paper</p>
        <p>scissors</p>
        <p>lizard</p>
        <p>spock</p>
      </div>
      <div className="score-wrapper__score">
        {/* Score  wrapper*/}
        <p className="score">score</p>
        <h1 className="score-amount">{score}</h1>
      </div>
    </div>
  );
}

export default Score;
