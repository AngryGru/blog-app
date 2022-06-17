import React from "react";
import "./EmptyState.css";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";
import EmptyBoxIcon from "./EmptyBoxIcon";

const EmptyState = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classNames("emptyStateContainer", {
        ["emptyStateContainerDark"]: !isLightTheme,
      })}
    >
      <EmptyBoxIcon
        fill={isLightTheme ? "lightblue" : "lightgoldenrodyellow"}
      />
      <p className="emptyStateTitle">No posts yet</p>
    </div>
  );
};

export default EmptyState;
