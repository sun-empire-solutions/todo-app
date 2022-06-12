import { useState } from "react"
import { Provider } from "react-redux"

import { TodosContainer } from "./containers/TodosContainer"
import { ITheme, ThemeContext } from "./context/ThemeContext"
import { TodoLayout } from "./layouts/TodoLayout"
import { store } from "./redux/store"

const App = () => {
  const [theme, setTheme] = useState<ITheme>("light")

  const handleThemeToggle = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"))
  }

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, toggleTheme: handleThemeToggle }}>
        <TodoLayout theme={theme}>
          <TodosContainer />
        </TodoLayout>
      </ThemeContext.Provider>
    </Provider>
  )
}

export { App }
