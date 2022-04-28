import React, { useState } from "react";
import "./Information.css";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";

const Information = ({ info }: any) => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;

  const [activeTab, setActiveTab] = useState("tab_1");
  const onClickActiveTab = (name: string) => {
    setActiveTab(name);
  };

  const isActiveTab_1 = activeTab === "tab_1";
  const isActiveTab_2 = activeTab === "tab_2";
  const isActiveTab_3 = activeTab === "tab_3";

  return (
    <div
      className={classNames("informationContainer", {
        ["informationContainerDark"]: !isLightTheme,
      })}
    >
      <div className="informationTitle">Information</div>
      <div className="informationTabs">
        <button
          className={classNames("infBtn", {
            ["infBtnActive"]: isActiveTab_1,
          })}
          onClick={() => onClickActiveTab("tab_1")}
        >
          Tab 1
        </button>
        <button
          className={classNames("infBtn", {
            ["infBtnActive"]: isActiveTab_2,
          })}
          onClick={() => onClickActiveTab("tab_2")}
        >
          Tab 2
        </button>
        <button
          className={classNames("infBtn", {
            ["infBtnActive"]: isActiveTab_3,
          })}
          onClick={() => onClickActiveTab("tab_3")}
        >
          Tab 3
        </button>
      </div>
      <div className="informationBody">
        {isActiveTab_1 ? info[0] : isActiveTab_2 ? info[1] : info[2]}
      </div>
    </div>
  );
};

export default Information;
{
  /* {(activeTab === 'tab1') ? info[0] : activeTab === 'tab2' ? info[1] : info[2] } */
}
