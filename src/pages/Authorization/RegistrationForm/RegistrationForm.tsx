import React, { useState, useEffect, FC } from "react";
import "./RegistrationForm.css";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

import { Theme, useThemeContext } from "../../../context/themeModeContext";
import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  AuthSelector,
} from "../../../redux/reducers/authReducer";

type RegistrationFormProps = {
  onLoginLinkClick: (name: string) => void;
};

const RegistrationForm: FC<RegistrationFormProps> = (props) => {
  const { onLoginLinkClick } = props;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameDirty, setUsernameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [usernameError, setUsernameError] = useState(
    "This field cannot be empty"
  );
  const [emailError, setEmailError] = useState("This field cannot be empty");
  const [passwordError, setPasswordError] = useState(
    "This field cannot be empty"
  );
  const [confirmPasswordError, setConfirmPasswordError] = useState(
    "This field cannot be empty"
  );
  const [formValid, setFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (usernameError || emailError || passwordError || confirmPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [usernameError, emailError, passwordError, confirmPasswordError]);

  const usernameHandle = (e: any) => {
    setUsername(e.target.value);
    const regex = /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z*]/g;
    if (e.target.value.length > 15) {
      setUsernameError("This field must be less than 15 characters");
    } else if (!regex.test(String(e.target.value))) {
      setUsernameError("Username should contain A-Z, a-z");
    } else {
      setUsernameError("");
    }
  };

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
  const confirmPasswordHandle = (e: any) => {
    setConfirmPassword(e.target.value);
    if (confirmPassword && e.target.value !== password) {
      setConfirmPasswordError("Passwords don't match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const blurHandle = (e: any) => {
    if (e.target.name === "username") {
      setUsernameDirty(true);
    }
    if (e.target.name === "email") {
      setEmailDirty(true);
    }
    if (e.target.name === "password") {
      setPasswordDirty(true);
    }
    if (e.target.name === "confirmPassword") {
      setConfirmPasswordDirty(true);
    }
  };
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      registerUser({ name: username, email: email, password: password })
    );
    // localStorage.setItem("isLoggedIn");
    navigate("/confirm", {
      state: {
        email,
      },
    });
  };

  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  return (
    <form
      onSubmit={onSubmit}
      className={classNames("registrationForm", {
        ["darkRegistrationForm"]: !isLightTheme,
      })}
    >
      <label>
        <div>Username:</div>
        <div>
          {usernameDirty && usernameError && (
            <span style={{ color: "red" }}>{usernameError}</span>
          )}
        </div>
        <Input
          className={"regInp"}
          type={"text"}
          name={"username"}
          value={username}
          placeholder={"Enter your username"}
          onBlur={(e: any) => blurHandle(e)}
          onChange={(e: any) => usernameHandle(e)}
        />
      </label>
      <label>
        <div>Email:</div>
        <div>
          {emailDirty && emailError && (
            <span style={{ color: "red" }}>{emailError}</span>
          )}
        </div>
        <Input
          className={"regInp"}
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
          className={"regInp"}
          type={"password"}
          name={"password"}
          value={password}
          placeholder={"Enter your password"}
          onBlur={(e: any) => blurHandle(e)}
          onChange={(e: any) => passwordHandle(e)}
        />
      </label>
      <label>
        <div>Confirm password:</div>
        <div>
          {confirmPasswordDirty && confirmPasswordError && (
            <span style={{ color: "red" }}>{confirmPasswordError}</span>
          )}
        </div>
        <Input
          className={"regInp"}
          type={"password"}
          name={"confirmPassword"}
          value={confirmPassword}
          placeholder={"Repeat your password"}
          onBlur={(e: any) => blurHandle(e)}
          onChange={(e: any) => confirmPasswordHandle(e)}
        />
      </label>
      <Button
        disabled={!formValid}
        className={"btn regBtn"}
        value={"Sign up"}
      />
      <p>
        If you have account you can{" "}
        <Button
          className={"btnLink"}
          value={"login"}
          onClick={() => onLoginLinkClick("login")}
        />
      </p>
    </form>
  );
};

export default RegistrationForm;
