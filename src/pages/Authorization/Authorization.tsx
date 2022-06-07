import React, { useState } from "react";
import "./Authorization.css";
import Header from "./Header";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { AuthSelector } from "../../redux/reducers/authReducer";
import { useSelector } from "react-redux";

import Lottie from "react-lottie";
import animationData from "../../components/Lotties/lottie-loading.json";

const Authorization = () => {
  const [tabName, setTabName] = useState("login");

  const onHeaderButtonClick = (name: string) => {
    setTabName(name);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const isAuthLoading = useSelector(AuthSelector.getAuthLoading);

  return (
    <div className="authotizationContainer">
      {isAuthLoading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <div className="authorizationContent">
          <Header onClick={onHeaderButtonClick} activeTab={tabName} />
          {tabName === "login" ? (
            <LoginForm />
          ) : (
            <RegistrationForm onLoginLinkClick={onHeaderButtonClick} />
          )}
        </div>
      )}
    </div>
  );
};

export default Authorization;
