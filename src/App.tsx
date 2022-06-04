import React, { useState } from "react";
import "./App.css";
import Router from "./pages/Router";
import classNames from "classnames";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme } from "./context/themeModeContext";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
  const isLightTheme = theme === Theme.Light;

  return (
    <Provider store={store}>
      <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
        <div
          className={classNames("App", {
            ["AppDark"]: !isLightTheme,
          })}
        >
          <Router />
        </div>
      </ThemeModeProvider>
    </Provider>
  );
};

export default App;
