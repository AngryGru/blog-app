import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Theme, useThemeContext } from "../../../context/themeModeContext";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("This field cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "This field cannot be empty"
  );
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.value);

  const onClick = (isPlus: boolean) => {
    const PLUS_ACTION = { type: "counter/incremented" };
    const MINUS_ACTION = { type: "counter/decremented" };
    dispatch(isPlus ? PLUS_ACTION : MINUS_ACTION);
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandle = (e: any) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(String(e.target.value).toLowerCase())) {
      setEmailError("Invalid email adress");
    } else {
      setEmailError("");
    }
  };

  const passwordHandle = (e: any) => {
    setPassword(e.target.value);
    const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z*]/g;
    if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else if (!regex.test(String(e.target.value))) {
      setPasswordError("Password should contain A-Z, a-z, 0-9");
    } else {
      setPasswordError("");
    }
  };

  const blurHandle = (e: any) => {
    if (e.target.name === "email") {
      setEmailDirty(true);
    }
    if (e.target.name === "password") {
      setPasswordDirty(true);
    }
  };

  const onSubmitLoginForm = (e: any) => {
    e.preventDefault();
  };

  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  return (
    <form
      onSubmit={onSubmitLoginForm}
      className={classNames("loginForm", {
        ["darkLoginForm"]: !isLightTheme,
      })}
    >
      <label>
        <div>Email:</div>
        <div>
          {emailDirty && emailError && (
            <span style={{ color: "red" }}>{emailError}</span>
          )}
        </div>
        <Input
          className={"loginInp"}
          type={"email"}
          name={"email"}
          value={email}
          placeholder={"Enter your email"}
          onBlur={(e: any) => blurHandle(e)}
          onChange={(e: any) => emailHandle(e)}
        />
      </label>
      <label>
        <div>Password:</div>
        <div>
          {passwordDirty && passwordError && (
            <span style={{ color: "red" }}>{passwordError}</span>
          )}
        </div>
        <Input
          className={"loginInp"}
          type={"password"}
          name={"password"}
          value={password}
          placeholder={"Enter your password"}
          onBlur={(e: any) => blurHandle(e)}
          onChange={(e: any) => passwordHandle(e)}
        />
      </label>
      <Button
        disabled={!formValid}
        className={"btn loginBtn"}
        value={"Login"}
      />
      <p>
        Forgot your password?{" "}
        <Button className={"btnLink"} value={"Reset password"} />
      </p>
      <Button
        className={"btnLink"}
        value={"Plus"}
        onClick={() => onClick(true)}
      />
      <Button
        className={"btnLink"}
        value={"Minus"}
        onClick={() => onClick(false)}
      />
      <div style={{ fontSize: 20, fontWeight: "bold" }}>{value}</div>
    </form>
  );
};

export default LoginForm;
