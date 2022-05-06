import React, { useContext } from "react";

export enum Theme {
  Light = "light",
  Dark = "dark",
}

const defaultValue = {
  theme: Theme.Light,
};

export type ThemeContextType = {
  children?: any;
  theme: Theme;
  onChangeTheme?: (theme: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeContextType>(defaultValue);

export const useThemeContext = () => useContext(ThemeContext);
