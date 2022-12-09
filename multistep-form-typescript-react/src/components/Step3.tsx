import React from "react";

type UserData = {
  onlineServices: boolean;
  servicesPrice: any;
  largeStorage: boolean;
  customizeProfile: boolean;
  subscriptionPeriod: string;
};

type Data = UserData & {
  updateField: (fields: Partial<UserData>) => void;
};

function Step3({
  onlineServices,
  largeStorage,
  customizeProfile,
  servicesPrice,
  subscriptionPeriod,
  updateField,
}: Data) {
  return (
    <div className="form-step">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>
      <div className="form-input-checkbox ">
        <label className="checkbox-container  space-between">
          <input
            type="checkbox"
            className="visible"
            checked={onlineServices}
            onClick={() => updateField({ onlineServices: !onlineServices })}
          />
          <span className="checkbox"></span>
          <div className="add-ons">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <div className="add-ons-price">
            <p>
              +$
              {subscriptionPeriod === "monthly"
                ? servicesPrice.onlineServices
                : servicesPrice.onlineServices * 10}
              /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        </label>
        <label className="checkbox-container  space-between">
          <input
            type="checkbox"
            className="visible"
            checked={largeStorage}
            onClick={() => updateField({ largeStorage: !largeStorage })}
          />
          <span className="checkbox"></span>
          <div className="add-ons">
            <h3>Larger Storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <div className="add-ons-price">
            <p>
              +$
              {subscriptionPeriod === "monthly"
                ? servicesPrice.largeStorage
                : servicesPrice.largeStorage * 10}
              /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        </label>
        <label className="checkbox-container  space-between">
          <input
            type="checkbox"
            className="visible"
            checked={customizeProfile}
            onClick={() => updateField({ customizeProfile: !customizeProfile })}
          />
          <span className="checkbox"></span>
          <div className="add-ons">
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <div className="add-ons-price">
            <p>
              +$
              {subscriptionPeriod === "monthly"
                ? servicesPrice.customizeProfile
                : servicesPrice.customizeProfile * 10}
              /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Step3;
