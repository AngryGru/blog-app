import React from "react";
import "./Confirmation.css";
import Button from "../../components/Button";

const Confirmation = (props: any) => {
  return (
    <div className="confirmationContainer">
      <div className="confirmationContent">
        <h2 className="confirmationTitle">Registration Confirmation</h2>
        <div className="confirmationText">
          <p>Please activate your account with</p>
          <p>
            the activation link in the email{" "}
            <Button className={"btnLink"} value={"test@gmail.com"} />
          </p>
          <p>Please check your email</p>
        </div>
        <Button className={"btn"} value={"Home"} />
      </div>
    </div>
  );
};

export default Confirmation;
