import React, { useState, useEffect } from "react";
import { useMemo } from "react";
import { useFormValidation, InputField, FormState } from "../hooks/useFormValidation";

const initialState: FormState = {
  inputFields: [
    { name: "email", value: "", isValid: false },
    { name: "password", value: "", isValid: false },
  ],
  errors: 0,
};
export const FormCheck = (): JSX.Element => {
  const { formState, handleChange } = useFormValidation(initialState);

  const percentComplete = useMemo(() => {
    return (formState.errors / formState.inputFields.length) * 100;
  }, [formState]);

  return (
    <div>
      {percentComplete !== null && <p>{percentComplete}%</p>}
      <form>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} required={true} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} required={true} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" onChange={handleChange} required={true} />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" onChange={handleChange}>
            <option value="" disabled={true} selected={true}>
              Select your option
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
