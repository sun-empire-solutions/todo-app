import { useState } from "react";

import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ITheme, ThemeContext } from "./context/ThemeContext";
import { TodoLayout } from "./layouts/TodoLayout";
import "./styles/index.scss";

const App = () => {
  const [theme, setTheme] = useState<ITheme>("light");

  const handleThemeToggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleThemeToggle }}>
      <TodoLayout theme={theme}>
        <ThemeSwitcher />
      </TodoLayout>
    </ThemeContext.Provider>
  );
};

export { App };
