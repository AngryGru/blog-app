import React from "react";
import "./Template.css";
import Button from "../../components/Button";

const Template = () => {
  return (
    <div className="templateContainer containerDark">
      <div className="templateContent contentDark">
        <h1 className="templateTitle titleDark">Template title</h1>
        <div className="templateBody bodyDark">Template body</div>
        <Button className={"btn btnDark"} value={"Button"} />
      </div>
    </div>
  );
};

export default Template;
