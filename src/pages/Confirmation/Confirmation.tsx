import React from "react";
import "./Confirmation.css";
import Button from "../../components/Button";
import Link from "../../components/Link";

const Confirmation = (props: any) => {
  return (
    <div className="confirmation_container">
      <div className="confirmation_content">
        <h2 className="confirmation_title">{props.title}</h2>
        <p className="confirmation_text">
          Please activate your account with <br /> the activation link in the
          email{" "}
          <Link
            className="link"
            href={"test@gmail.com"}
            title={"test@gmail.com"}
          />{" "}
          <br />
          Please check your email
        </p>
        <Button value={"Home"} />
      </div>
    </div>
  );
};

export default Confirmation;
