import React from "react";
import "./Confirmation.css";
import Button from "../../components/Button";

const Confirmation = (props: any) => {
  return (
    <div className="confirmationContainer">
      <div className="confirmationContent">
        <h2 className="confirmationTitle">Registration Confirmation</h2>
        <p className="confirmationText">
          Please activate your account with <br /> the activation link in the
          email <Button className={"btnLink"} value={"test@gmail.com"} /> <br />
          Please check your email
        </p>
        <Button className={"btn"} value={"Home"} />
      </div>
    </div>
  );
};

export default Confirmation;
