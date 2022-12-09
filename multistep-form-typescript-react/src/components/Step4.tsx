import React, { useEffect } from "react";

type UserData = {
  subscriptionType: string;
  subscriptionTypePrice: any;
  subscriptionPeriod: string;
  onlineServices: boolean;
  servicesPrice: any;
  largeStorage: boolean;
  customizeProfile: boolean;
};

type Data = UserData & {
  updateField: (fields: Partial<UserData>) => void;
};

function Step4({
  subscriptionType,
  subscriptionTypePrice,
  subscriptionPeriod,
  onlineServices,
  servicesPrice,
  largeStorage,
  customizeProfile,
  updateField,
}: Data) {
  //Calculating total
  let total = 0;
  if (subscriptionPeriod === "monthly") {
    total += subscriptionTypePrice[subscriptionType];
    if (onlineServices) {
      total += servicesPrice.onlineServices;
    }
    if (largeStorage) {
      total += servicesPrice.largeStorage;
    }
    if (customizeProfile) {
      total += servicesPrice.customizeProfile;
    }
  } else if (subscriptionPeriod === "yearly") {
    total += subscriptionTypePrice[subscriptionType] * 10;
    if (onlineServices) {
      total += servicesPrice.onlineServices * 10;
    }
    if (largeStorage) {
      total += servicesPrice.largeStorage * 10;
    }
    if (customizeProfile) {
      total += servicesPrice.customizeProfile * 10;
    }
  }
  return (
    <div className="form-step">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="form-finish">
        <div className="subscription-finish">
          <div className="subscription-finish--plan">
            <h3>
              {subscriptionType} <span>({subscriptionPeriod})</span>
            </h3>
            <p className="goto">Change</p>
          </div>
          <div className="subscription-finish--price">
            <p>
              $
              {subscriptionPeriod === "monthly"
                ? subscriptionTypePrice[subscriptionType]
                : subscriptionTypePrice[subscriptionType] * 10}
              /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        </div>
        <hr />
        <div className="extra-services">
          {onlineServices && (
            <div className="service">
              <p>Online service</p>
              <p className="price">
                +$
                {subscriptionPeriod === "monthly"
                  ? servicesPrice.onlineServices
                  : servicesPrice.onlineServices * 10}
                /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          )}
          {largeStorage && (
            <div className="service">
              <p>Larger storage</p>
              <p className="price">
                +$
                {subscriptionPeriod === "monthly"
                  ? servicesPrice.largeStorage
                  : servicesPrice.largeStorage * 10}
                /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          )}
          {customizeProfile && (
            <div className="service">
              <p>Customizable profile</p>
              <p className="price">
                +$
                {subscriptionPeriod === "monthly"
                  ? servicesPrice.customizeProfile
                  : servicesPrice.customizeProfile * 10}
                /{subscriptionPeriod === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="total">
        <p>Total(per month)</p>
        <p>
          +{total}/{subscriptionPeriod === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
}

export default Step4;
