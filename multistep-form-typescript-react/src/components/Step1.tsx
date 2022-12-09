import { type } from "os";
import React from "react";

type UserData = {
  userName: string;
  email: string;
  phone: string;
};

type Data = UserData & {
  updateField: (fields: Partial<UserData>) => void;
};

function Step1({ userName, email, phone, updateField }: Data) {
  return (
    <div className="form-step">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <div className="form-input">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="e.g. Stephen King"
          required
          value={userName}
          onChange={(e) => updateField({ userName: e.target.value })}
        />
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="e.g stepghenking@lorem.com"
          required
          value={email}
          onChange={(e) => updateField({ email: e.target.value })}
        />
        <label htmlFor="phone">Phone number</label>
        <input
          name="phone"
          type="number"
          placeholder="e.g. +1 234 567 890"
          required
          value={phone}
          onChange={(e) => updateField({ phone: e.target.value })}
        />
      </div>
    </div>
  );
}

export default Step1;
