import React, { useState } from "react";
import "./LoginForm.css";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const LoginForm = () => {
  return (
    <form className="Login">
      <label>
        Email:
        <Input type={"email"} />
      </label>
      <label>
        Password:
        <Input type={"password"} />
      </label>
      <Button className={"btn"} value={"Login"} />
      <p>
        Forgot your password?{" "}
        <Button className={"btnLink"} value={"Reset password"} />
      </p>
    </form>
  );
};

export default LoginForm;
