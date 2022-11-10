import React, { useEffect, useState } from "react";

function PostGame({
  playerChoice,
  setPlayerChoice,
  aiChoice,
  setAiChoice,
  setGameActive,
  setScore,
}) {
  const [housePicked, setHousePicked] = useState(false);
  const [playerWin, setPlayerWin] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHousePicked(true);
    }, 1000);
    const game = setTimeout(() => {
      //if the player wins with Scissors
      if (
        (playerChoice.name === "scissors" && aiChoice === "paper") ||
        (playerChoice.name === "scissors" && aiChoice === "lizard")
      ) {
        setPlayerWin(true);
        setScore((prevScore) => (prevScore += 1));
      } //if the player wins with Paper
      else if (
        (playerChoice.name === "paper" && aiChoice === "rock") ||
        (playerChoice.name === "paper" && aiChoice === "spock")
      ) {
        setPlayerWin(true);
        setScore((prevScore) => (prevScore += 1));
      } //if the player wins with Rock
      else if (
        (playerChoice.name === "rock" && aiChoice === "lizard") ||
        (playerChoice.name === "rock" && aiChoice === "scissors")
      ) {
        setPlayerWin(true);
        setScore((prevScore) => (prevScore += 1));
      } //if the player wins with Lizard
      else if (
        (playerChoice.name === "lizard" && aiChoice === "spock") ||
        (playerChoice.name === "lizard" && aiChoice === "paper")
      ) {
        setPlayerWin(true);
        setScore((prevScore) => (prevScore += 1));
      } //if the player wins with Spock
      else if (
        (playerChoice.name === "spock" && aiChoice === "scissors") ||
        (playerChoice.name === "spock" && aiChoice === "rock")
      ) {
        setPlayerWin(true);
        setScore((prevScore) => (prevScore += 1));
      } else {
        setPlayerWin(false);
        setScore((prevScore) => (prevScore -= 1));
      }
      setGameFinished(true);
    }, 3000);
    return () => clearTimeout(game);
  }, []);

  const playAgain = () => {
    setGameActive(false);
    setPlayerChoice("");
    setAiChoice("");
    setHousePicked(false);
    setGameFinished(false);
    setPlayerWin(false);
  };

  return (
    <>
      <div className="game-option-container__after-select">
        <div className={`game-option-wrapper ${playerChoice.name}`}>
          <img
            src={`./images/icon-${playerChoice.name}.svg`}
            alt={playerChoice.name}
          ></img>
          <h2>YOU PICKED</h2>
        </div>
        <div
          className={`${
            housePicked
              ? `game-option-wrapper ${aiChoice}`
              : "game-option-wrapper empty"
          }`}
        >
          <img
            className={!housePicked ? "transparent" : ""}
            src={`./images/icon-${aiChoice}.svg`}
            alt={aiChoice}
          ></img>
          <h2>THE HOUSE PICKED</h2>
        </div>
      </div>
      {gameFinished && (
        <div className="post-game">
          {playerWin ? <h1>YOU WIN</h1> : <h1>YOU LOST</h1>}
          <button onClick={playAgain} className="btn">
            PLAY AGAIN
          </button>
        </div>
      )}
    </>
  );
}

export default PostGame;
