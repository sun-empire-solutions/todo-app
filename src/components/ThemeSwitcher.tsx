import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

//@ts-ignore
import moon from "./../assets/images/icon-moon.svg";
//@ts-ignore
import sun from "./../assets/images/icon-sun.svg";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const removeTransition = () => {
    document.documentElement.classList.remove("transition");
  };

  const addTransition = () => {
    document.documentElement.classList.add("transition");
  };

  const toggleThemeWithTransition = () => {
    removeTransition();
    toggleTheme();
    addTransition();
    window.setTimeout(() => {
      removeTransition();
    }, 2000);
  };

  return (
    <button className="theme-switcher" onClick={toggleThemeWithTransition}>
      <img src={theme === "dark" ? sun : moon} />
    </button>
  );
};

export { ThemeSwitcher };
