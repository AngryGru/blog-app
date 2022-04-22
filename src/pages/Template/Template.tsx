import React from "react";
import "./Template.css";
import Button from "../../components/Button";

const Template = () => {
  return (
    <div className="templateContainer">
      <div className="templateContent">
        <h1 className="templateTitle">Template title</h1>
        <div className="templateBody">Template body</div>
        <Button className={"btn"} value={"Button"} />
      </div>
    </div>
  );
};

export default Template;
