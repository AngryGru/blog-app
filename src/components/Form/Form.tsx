import React from "react";
import "./Form.css";
import Input from "../Input";

const Form = () => {
  return (
    <form>
      <div className="row">
        <label>
          Name:
          <Input type={"text"} />
        </label>
        <label>
          Email:
          <Input type={"email"} />
        </label>
        <label>
          Password:
          <Input type={"password"} />
        </label>
      </div>
      <div className="row">
        <label>
          Message:
          <textarea />
        </label>
      </div>
    </form>
  );
};

export default Form;
