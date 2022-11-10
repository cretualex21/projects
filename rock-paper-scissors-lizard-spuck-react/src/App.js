import "./main.css";
import React, { useEffect, useRef, useState } from "react";
import Score from "./components/Score";
import Rule from "./components/Rule";
import Game from "./components/Game";
import PostGame from "./components/PostGame";
const playOptions = ["scissors", "spock", "paper", "lizard", "rock"];

function App() {
  const [gameActive, setGameActive] = useState(false);
  const [playerChoice, setPlayerChoice] = useState("");
  const [aiChoice, setAiChoice] = useState("");
  const [score, setScore] = useState(0);
  const [isRulesVisible, setIsRulesVisible] = useState(false);

  const playerOptionSelectet = (e) => {
    setPlayerChoice(e.target.dataset);
    let randomNum = Math.floor(Math.random() * playOptions.length);
    setAiChoice(playOptions[randomNum]);
    setTimeout(() => {}, 2000);
    setGameActive(true);
  };

  //useEffect to display or hide the rules modal
  useEffect(() => {
    if (isRulesVisible === false) {
      document.querySelector(".modal-wrapper").style.display = "none";
    } else {
      document.querySelector(".modal-wrapper").style.display = "block";
    }
  }, [isRulesVisible]);
  return (
    <>
      <Score score={score} />
      {!gameActive && <Game playerOptionSelectet={playerOptionSelectet} />}
      {gameActive && (
        <PostGame
          playerChoice={playerChoice}
          setPlayerChoice={setPlayerChoice}
          aiChoice={aiChoice}
          setAiChoice={setAiChoice}
          setGameActive={setGameActive}
          setScore={setScore}
        />
      )}
      <Rule setIsRulesVisible={setIsRulesVisible} />
    </>
  );
}

export default App;
