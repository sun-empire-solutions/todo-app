import { createContext } from "react";

const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

type IThemeContext = {
  theme: ITheme;
  toggleTheme: () => void;
};

export type ITheme = "light" | "dark";

export { ThemeContext };
