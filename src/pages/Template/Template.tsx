import React from "react";
import "./Template.css";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";

const Template = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classNames("templateContainer", {
        ["templateContainerDark"]: !isLightTheme,
      })}
    >
      <div className="templateContent">
        <h1 className="templateTitle">Template title</h1>
        <div className="templateBody">Template body</div>
        <Button className={"btn"} value={"Button"} />
      </div>
    </div>
  );
};

export default Template;
