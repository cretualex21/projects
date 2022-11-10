import React from "react";

function Rule({ setIsRulesVisible }) {
  return (
    <>
      <div
        className="rule-wrapper"
        onClick={() => setIsRulesVisible((prevState) => !prevState)}
      >
        <h2>RULES</h2>
      </div>
      <div className="modal-wrapper">
        <div className="modal">
          <h1>RULES</h1>
          <img
            className="rules"
            src="./images/image-rules-bonus.svg"
            alt="game rules"
          ></img>
          <img
            className="close-btn"
            onClick={() => setIsRulesVisible((prevState) => !prevState)}
            src="./images/icon-close.svg"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Rule;
