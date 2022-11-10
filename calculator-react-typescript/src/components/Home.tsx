import React, { FC } from "react";
import CalcBody from "./CalcBody";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function Home({ value, setValue }: Props) {
  const btn = document.querySelector(".btn");
  const body = document.querySelector("body");
  //Function to change the theme of the calculator
  const themePicker = (
    navigTheme: string,
    navigThemeReplace: string,
    btnsHolder: string,
    btnsHolderReplace: string,
    calcText: string,
    calcTextReplace: string,
    calBody: string,
    calBodyReplace: string,
    calcNum: string,
    calcNumReplace: string,
    deleteBtn: string,
    deleteBtnReplace: string,
    rrBtn: string,
    rrBtnReplace: string,
    eqBtn: string,
    eqBtnReplace: string,
    speicalText: string,
    specialTextReplace: string
  ) => {
    //Selecting the containers to be changed
    const navTheme = document.querySelector(".calc__nav");
    const btnHolder = document.querySelector(".button-holder");
    const calcTextBg = document.querySelector(".calc-body-text--background");
    const calcBody = document.querySelector(".calc-body__main");
    const calcNums = document.querySelectorAll(".btns-holder > p");
    const delBtn = document.querySelector(".del");
    const resetBtn = document.querySelector(".reset");
    const equalsBtn = document.querySelector(".equals");
    const specialsText = document.querySelectorAll(".wide > p");

    //Replace classes
    navTheme?.classList.replace(navigTheme, navigThemeReplace);
    btnHolder?.classList.replace(btnsHolder, btnsHolderReplace);
    calcTextBg?.classList.replace(calcText, calcTextReplace);
    calcBody?.classList.replace(calBody, calBodyReplace);
    calcNums.forEach((p) => p.classList.replace(calcNum, calcNumReplace));
    delBtn?.classList.replace(deleteBtn, deleteBtnReplace);
    resetBtn?.classList.replace(rrBtn, rrBtnReplace);
    equalsBtn?.classList.replace(eqBtn, eqBtnReplace);
    specialsText.forEach((p) =>
      p.classList.replace(speicalText, specialTextReplace)
    );
  };

  const changeTheme = () => {
    if (btn?.classList.contains("btn-theme1")) {
      //replace classes
      btn.classList.replace("btn-theme1", "btn-theme2");
      themePicker(
        "calc-nav-theme1",
        "calc-nav-theme2",
        "button-holder-theme1",
        "button-holder-theme2",
        "text-theme1",
        "text-theme2",
        "body-theme1",
        "body-theme2",
        "calc-theme1",
        "calc-theme2",
        "del-theme1",
        "del-theme2",
        "reset-theme1",
        "reset-theme2",
        "equals-theme1",
        "equals-theme2",
        "specials-theme1",
        "specials-theme2"
      );
      body?.classList.add("main-body-theme2");
    } else if (btn?.classList.contains("btn-theme2")) {
      //replace classes
      btn.classList.replace("btn-theme2", "btn-theme3");
      themePicker(
        "calc-nav-theme2",
        "calc-nav-theme3",
        "button-holder-theme2",
        "button-holder-theme3",
        "text-theme2",
        "text-theme3",
        "body-theme2",
        "body-theme3",
        "calc-theme2",
        "calc-theme3",
        "del-theme2",
        "del-theme3",
        "reset-theme2",
        "reset-theme3",
        "equals-theme2",
        "equals-theme3",
        "specials-theme2",
        "specials-theme3"
      );
      body?.classList.replace("main-body-theme2", "main-body-theme3");
    } else {
      //replace classes
      btn?.classList.replace("btn-theme3", "btn-theme1");
      themePicker(
        "calc-nav-theme3",
        "calc-nav-theme1",
        "button-holder-theme3",
        "button-holder-theme1",
        "text-theme3",
        "text-theme1",
        "body-theme3",
        "body-theme1",
        "calc-theme3",
        "calc-theme1",
        "del-theme3",
        "del-theme1",
        "reset-theme3",
        "reset-theme1",
        "equals-theme3",
        "equals-theme1",
        "specials-theme3",
        "specials-theme1"
      );
      body?.classList.remove("main-body-theme3");
    }
  };
  return (
    <div className="calc-container">
      <div className="calc__nav calc-nav-theme1">
        <h1>calc</h1>
        <div className="theme-container">
          <p>THEME</p>
          <div className="theme-wrap">
            <div className="themes">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <div className="button-holder button-holder-theme1">
              <div className="btn btn-theme1" onClick={changeTheme}></div>
            </div>
          </div>
        </div>
      </div>
      <CalcBody value={value} setValue={setValue} />
    </div>
  );
}

export default Home;
