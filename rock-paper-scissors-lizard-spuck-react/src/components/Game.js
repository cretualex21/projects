import React from "react";

function Game({ playerOptionSelectet }) {
  return (
    <>
      <div className="game-wrapper">
        <div className="game-option-container">
          <div
            className="game-option-wrapper scissors  "
            data-name="scissors"
            onClick={(e) => playerOptionSelectet(e)}
          >
            <img src="./images/icon-scissors.svg" alt="scissors"></img>
          </div>
        </div>
        <div className="game-option-container">
          <div
            className="game-option-wrapper spock "
            data-name="spock"
            onClick={(e) => playerOptionSelectet(e)}
          >
            <img src="./images/icon-spock.svg" alt="spock"></img>
          </div>
          <div
            className="game-option-wrapper paper "
            data-name="paper"
            onClick={(e) => playerOptionSelectet(e)}
          >
            <img src="./images/icon-paper.svg" alt="paper"></img>
          </div>
        </div>
        <div className="game-option-container">
          <div
            className="game-option-wrapper lizard "
            data-name="lizard"
            onClick={(e) => playerOptionSelectet(e)}
          >
            <img src="./images/icon-lizard.svg" alt="lizard"></img>
          </div>
          <div
            className="game-option-wrapper rock "
            data-name="rock"
            onClick={(e) => playerOptionSelectet(e)}
          >
            <img src="./images/icon-rock.svg" alt="rock"></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Game;
