import React from "react";
import "./Login.css";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";

const Login = (props: any) => {
  return (
    <div className="login_container">
      <div className="login_content">
        <div className="login_nav">
          <Link className={"link"} href={"href-example.com"} title="Login" />
          <div className="dash" />
          <Link
            className={"link"}
            href={"href-example.com"}
            title="Registration"
          />
        </div>
        <label>
          Email:
          <Input type={"email"} />
        </label>
        <label>
          Password:
          <Input type={"password"} />
        </label>
        <Button value={"Login"} />
        <p>
          Forgot your password?{" "}
          <Link
            className={"link"}
            href={"href-example.com"}
            title="Reset password"
          />
        </p>
      </div>
    </div>
  );
};

export default Login;
