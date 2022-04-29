import React, { useState } from "react";
import "./Authorization.css";
import Header from "./Header";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import Confirmation from "../Confirmation";

const Authorization = (props: any) => {
  const [tabName, setTabName] = useState("login");
  const [isConfirmed, setConfirmed] = useState(false);

  const onHeaderButtonClick = (name: string) => {
    setTabName(name);
  };
  const onSignUpButtonClick = () => {
    setConfirmed(true);
  };

  return !isConfirmed ? (
    <div className="authotizationContainer">
      <div className="authorizationContent">
        <Header onClick={onHeaderButtonClick} activeTab={tabName} />
        {tabName === "login" ? (
          <LoginForm />
        ) : (
          <RegistrationForm
            onSignUpClick={onSignUpButtonClick}
            onLoginLinkClick={onHeaderButtonClick}
          />
        )}
      </div>
    </div>
  ) : (
    <Confirmation />
  );
};

export default Authorization;
