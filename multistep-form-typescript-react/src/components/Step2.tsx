import React, { useEffect, useState } from "react";

type UserData = {
  subscriptionType: string;
  subscriptionTypePrice: any;
  subscriptionPeriod: string;
};

type Data = UserData & {
  updateField: (fields: Partial<UserData>) => void;
};

function Step2({
  subscriptionType,
  subscriptionTypePrice,
  subscriptionPeriod,
  updateField,
}: Data) {
  const [isChecked, setIsChecked] = useState("Arcade");
  let btn = document.querySelector(".sub-btn") as HTMLElement | null;
  useEffect(() => {
    btn = document.querySelector(".sub-btn") as HTMLElement | null;
    setIsChecked(subscriptionType);
  });

  function handlePlan(e: React.MouseEvent) {
    e.preventDefault();

    if (subscriptionPeriod === "monthly") {
      btn!.style.transform = "translate(28px, 1px)";
      updateField({ subscriptionPeriod: "yearly" });
    } else {
      btn!.style.transform = "translate(0px, 1px)";

      updateField({ subscriptionPeriod: "monthly" });
    }
  }

  return (
    <div className="form-step">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="form-input-checkbox desktop ">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked === "Arcade" && subscriptionType === "Arcade"}
            onClick={(e) => updateField({ subscriptionType: "Arcade" })}
          />
          <img src="./images/icon-arcade.svg" alt="arcade" />
          <div className="subscription">
            <h3>Arcade</h3>
            <p>
              $
              {subscriptionPeriod === "monthly"
                ? subscriptionTypePrice.Arcade
                : subscriptionTypePrice.Arcade * 10}
              /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
            </p>
            <p className="free">
              {subscriptionPeriod === "yearly" && "2 months free"}
            </p>
          </div>
        </label>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={
              isChecked === "Advanced" && subscriptionType === "Advanced"
            }
            onClick={() => updateField({ subscriptionType: "Advanced" })}
          />
          <img src="./images/icon-advanced.svg" alt="advanced" />
          <div className="subscription">
            <h3>Advanced</h3>
            <p>
              $
              {subscriptionPeriod === "monthly"
                ? subscriptionTypePrice.Advanced
                : subscriptionTypePrice.Advanced * 10}
              /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
            </p>
            <p className="free">
              {subscriptionPeriod === "yearly" && "2 months free"}
            </p>
          </div>
        </label>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked === "Pro" && subscriptionType === "Pro"}
            onClick={(e) => updateField({ subscriptionType: "Pro" })}
          />
          <img src="./images/icon-pro.svg" alt="pro" />
          <div className="subscription">
            <h3>Pro</h3>
            <p>
              $
              {subscriptionPeriod === "monthly"
                ? subscriptionTypePrice.Pro
                : subscriptionTypePrice.Pro * 10}
              /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
            </p>
            <p className="free">
              {subscriptionPeriod === "yearly" && "2 months free"}
            </p>
          </div>
        </label>
      </div>
      <div className="subscription-plan">
        <p>Monthly</p>
        <div className="subscription-plan-btn">
          <button className="sub-btn" onClick={(e) => handlePlan(e)}></button>
        </div>
        <p>Yearly</p>
      </div>
    </div>
  );
}

export default Step2;
