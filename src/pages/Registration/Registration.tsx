import React, { useState } from "react";
import "./Registration.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Confirmation from "../Confirmation";
import Login from "../Login";
import { isPropertySignature } from "typescript";

const Form = (props: any) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("CLICK");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <Input type={"text"} />
      </label>
      <label>
        Email:
        <Input type={"email"} />
      </label>
      <label>
        Password:
        <Input type={"password"} />
      </label>
      <label>
        Confirm password:
        <Input type={"password"} />
      </label>
      <Button className={"btn"} value={"Login"} />

      <p>
        If you have account you can{" "}
        <Button className={"btnLink"} value={"login"} />
      </p>
    </form>
  );
};

const Registration = (props: any) => {
  return (
    <div className="loginContainer">
      <div className="loginContent">
        <div className="loginHeader">
          <Button className={"btnTitle"} value={"Login"} />
          <div className="dash" />
          <Button className={"btnTitle active"} value={"Registration"} />
        </div>

        <Form />
      </div>
    </div>
  );
};

export default Registration;
