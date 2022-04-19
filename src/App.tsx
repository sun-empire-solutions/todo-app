import { useState } from "react";

import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { TodosContainer } from "./containers/TodosContainer";
import { ITheme, ThemeContext } from "./context/ThemeContext";
import { TodoLayout } from "./layouts/TodoLayout";


const App = () => {
  const [theme, setTheme] = useState<ITheme>("light");

  const handleThemeToggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: handleThemeToggle }}>
      <TodoLayout theme={theme}>
        <TodosContainer />
      </TodoLayout>
    </ThemeContext.Provider>
  );
};

export { App };
