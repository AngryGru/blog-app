import React, { useState } from "react";
import "./RegistrationForm.css";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const RegistrationForm = (props: any) => {
  return (
    <form className="registrationForm">
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

export default RegistrationForm;
