import React from "react";
import "./Confirmation.css";
import Button from "../../components/Button";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Confirmation = (props: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const location: any = useLocation();
  // const navigate = useNavigate()

  const onHomeClick = () => {
    localStorage.setItem("isLoggedIn", "true");
    window.location.replace("/cards-list");
  };

  return (
    <div
      className={classNames("confirmationContainer", {
        ["confirmationContainerDark"]: !isLightTheme,
      })}
    >
      <div className="confirmationContent">
        <h2 className="confirmationTitle">Registration Confirmation</h2>
        <div className="confirmationText">
          <p>Please activate your account with</p>
          <p>
            the activation link in the email{" "}
            <Button
              className={"btnLink"}
              value={location?.state?.email ?? ""}
            />
          </p>
          <p>Please check your email</p>
        </div>
        <Button
          className={"btn confirmBtn"}
          value={"Home"}
          onClick={onHomeClick}
        />
      </div>
    </div>
  );
};

export default Confirmation;
