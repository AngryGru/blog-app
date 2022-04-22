import React from "react";
import "./Login.css";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = (props: any) => {
  return (
    <div className="loginContainer">
      <div className="loginContent">
        <div className="loginHeader">
          <Button className={"btnTitle active"} value={"Login"} />
          <div className="dash" />
          <Button className={"btnTitle"} value={"Registration"} />
        </div>

        <form>
          <label>
            Email:
            <Input type={"email"} />
          </label>
          <label>
            Password:
            <Input type={"password"} />
          </label>
          <Button className={"btn"} value={"Login"} />
        </form>
        <p>
          Forgot your password?{" "}
          <Button className={"btnLink"} value={"Reset password"} />
        </p>
      </div>
    </div>
  );
};

export default Login;
