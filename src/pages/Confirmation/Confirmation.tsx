import React from "react";
import "./Confirmation.css";
import Button from "../../components/Button";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelector, activateUser } from "../../redux/reducers/authReducer";

const Confirmation = (props: any) => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tempMail = useSelector(AuthSelector.getTempMail);
  const { uuid, token } = useParams();

  const onHomeClick = () => {
    dispatch(
      activateUser({
        uuid,
        token,
        callback: () => {
          navigate("/auth");
        },
      })
    );
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
            <Button className={"btnLink"} value={tempMail || ""} />
          </p>
          <p>Please check your email</p>
        </div>
        <Button
          className={"btn confirmBtn"}
          value={"Confirm"}
          onClick={onHomeClick}
        />
      </div>
    </div>
  );
};

export default Confirmation;
