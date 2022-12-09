import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import Step1 from "../../components/Step1";
import Step2 from "../../components/Step2";
import Step3 from "../../components/Step3";
import Step4 from "../../components/Step4";
import Step5 from "../../components/Step5";
import { useMultiStepForm } from "../../useMultiStepForm";

type FormData = {
  userName: string;
  email: string;
  phone: string;
  plan: string;
  subscriptionType: string;
  subscriptionTypePrice: object;
  subscriptionPeriod: string;
  onlineServices: boolean;
  largeStorage: boolean;
  customizeProfile: boolean;
  servicesPrice: object;
};

const INITIAL_DATA: FormData = {
  userName: "",
  email: "",
  phone: "",
  plan: "",
  subscriptionType: "Arcade",
  subscriptionTypePrice: { Arcade: 9, Advanced: 12, Pro: 15 },
  subscriptionPeriod: "monthly",
  onlineServices: false,
  largeStorage: false,
  customizeProfile: false,
  servicesPrice: { onlineServices: 1, largeStorage: 2, customizeProfile: 2 },
};

function Home() {
  const [data, setData] = useState(INITIAL_DATA);

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next, goTo } =
    useMultiStepForm([
      <Step1 {...data} updateField={updateField} />,
      <Step2 {...data} updateField={updateField} />,
      <Step3 {...data} updateField={updateField} />,
      <Step4 {...data} updateField={updateField} />,
      <Step5 />,
    ]);
  function updateField(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  //Setting active class for steps
  const activeSteps = document.querySelectorAll(".step");
  activeSteps.forEach((steps) => {
    if (steps.getAttribute("data-step") == currentStepIndex.toString()) {
      steps.classList.add("active");
    } else if (
      steps.getAttribute("data-step") == "3" &&
      currentStepIndex.toString() == "4"
    ) {
      steps.classList.add("active");
    } else {
      steps.classList.remove("active");
    }
  });
  //Setting class for confirm btn
  const lastBtn = document.querySelector(".next-btn");
  if (currentStepIndex.toString() == "3") {
    lastBtn?.classList.add("last");
  } else {
    lastBtn?.classList.remove("last");
  }
  //Functionality for Change btn
  useEffect(() => {
    const gotoBtn = document.querySelector(".goto");
    gotoBtn?.addEventListener("click", () => {
      goTo(1);
    });
  });
  //Hiding buttons on last page

  const btnContainer = document.querySelector(".btn-container");
  if (currentStepIndex.toString() == "4") {
    btnContainer?.classList.add("hidden");
  } else {
    btnContainer?.classList.remove("hidden");
  }

  return (
    <>
      <div className="step-tracker">
        <div className="steps">
          <div className="step" data-step="0">
            <p>1</p>
          </div>
          <div className="steps--text">
            <p>step 1</p>
            <p>your info</p>
          </div>
        </div>
        <div className="steps">
          <div className="step" data-step="1">
            <p>2</p>
          </div>
          <div className="steps--text">
            <p>step 2</p>
            <p>select plan</p>
          </div>
        </div>
        <div className="steps">
          <div className="step" data-step="2">
            <p>3</p>
          </div>
          <div className="steps--text">
            <p>step 3</p>
            <p>add-ons</p>
          </div>
        </div>
        <div className="steps">
          <div className="step" data-step="3">
            <p>4</p>
          </div>
          <div className="steps--text">
            <p>step 4</p>
            <p>summary</p>
          </div>
        </div>
      </div>
      <div className="form-container">
        <form>{step}</form>
      </div>
      <div className="btn-container">
        {isFirstStep && (
          <button className="back-btn" onClick={back}>
            Go Back
          </button>
        )}
        <button type="submit" className="next-btn" onClick={next}>
          {!isLastStep ? "Next Step" : "Confirm"}
        </button>
      </div>
    </>
  );
}

export default Home;
