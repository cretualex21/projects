import React, { EventHandler, useRef } from "react";
type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

let userOperation: string = "";
function CalcBody({ value, setValue }: Props) {
  const handleNumbers = (e: React.MouseEvent) => {
    const initialValue = e.currentTarget.getAttribute("data-numb");

    if (value === "0") {
      setValue(initialValue!);
    } else {
      setValue((prevValue) => prevValue + initialValue);
    }
  };
  //Function to delete the last number from the calculator text screen
  const handleDelete = (e: React.MouseEvent) => {
    if (value.length <= 1) {
      setValue("0");
    } else {
      setValue((prev) => prev.slice(0, -1));
    }
  };
  //Function to reset calculator screen
  const handleReset = (e: React.MouseEvent) => {
    setValue("0");
  };
  //Adding user operation to global variable
  const handleOperations = (e: React.MouseEvent) => {
    if (e.currentTarget.getAttribute("data-operation") === "/") {
      userOperation += " " + value + " /";
      setValue("0");
    } else if (e.currentTarget.getAttribute("data-operation") === "*") {
      userOperation += " " + value + " *";
      setValue("0");
    } else if (e.currentTarget.getAttribute("data-operation") === "+") {
      userOperation += " " + value + " +";
      setValue("0");
    }
    if (e.currentTarget.getAttribute("data-operation") === "-") {
      userOperation += " " + value + " -";
      setValue("0");
    }
  };
  //Calculating user operation
  const handleEquals = () => {
    //If user clicks on EQUALS and there is a number in the calculator screen I add that to the global variable
    if (value) {
      userOperation += " " + value;
    }
    let calculation = userOperation.split(" ");
    console.log(calculation);
    let result = eval(calculation.join(" "));
    console.log(result);
    setValue(result);
    userOperation = "";
  };

  return (
    <div className="calc-body-container">
      {/*Container for the text */}
      <div className="calc-body-text--background text-theme1">
        <p>{value}</p>
      </div>
      {/*Container for the calc body*/}
      <div className="calc-body__main body-theme1">
        <div className="btns-holder">
          <p className="calc-theme1" data-numb="7" onClick={handleNumbers}>
            7
          </p>
          <p
            className="calc-theme1"
            data-numb="8"
            onClick={(e) => handleNumbers(e)}
          >
            8
          </p>
          <p className="calc-theme1" data-numb="9" onClick={handleNumbers}>
            9
          </p>
          <span
            className="del special-2 del-theme1"
            onClick={(e) => handleDelete(e)}
          >
            DEL
          </span>
          <p className="calc-theme1" data-numb="4" onClick={handleNumbers}>
            4
          </p>
          <p className="calc-theme1" data-numb="5" onClick={handleNumbers}>
            5
          </p>
          <p className="calc-theme1" data-numb="6" onClick={handleNumbers}>
            6
          </p>
          <p
            className="calc-theme1"
            onClick={handleOperations}
            data-operation="+"
          >
            +
          </p>
          <p className="calc-theme1" data-numb="1" onClick={handleNumbers}>
            1
          </p>
          <p className="calc-theme1" data-numb="2" onClick={handleNumbers}>
            2
          </p>
          <p className="calc-theme1" data-numb="3" onClick={handleNumbers}>
            3
          </p>
          <p
            className="calc-theme1"
            onClick={handleOperations}
            data-operation="-"
          >
            -
          </p>
          <p className="calc-theme1" data-numb="." onClick={handleNumbers}>
            .
          </p>
          <p className="calc-theme1" data-numb="0" onClick={handleNumbers}>
            0
          </p>
          <p
            className="calc-theme1"
            onClick={handleOperations}
            data-operation="/"
          >
            /
          </p>
          <p
            className="calc-theme1"
            onClick={handleOperations}
            data-operation="*"
          >
            x
          </p>
          <span className="reset wide reset-theme1">
            <p className="specials-theme1" onClick={handleReset}>
              RESET
            </p>
          </span>
          <span className="wide equals equals-theme1">
            <p className="specials-theme1" onClick={handleEquals}>
              =
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CalcBody;
