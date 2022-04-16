import { useState } from "react"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { ThemeContext } from "./context/ThemeContext"
import { TodoLayout } from "./layouts/TodoLayout"
import "./styles/index.scss"

const App = () => {
    const [theme, setTheme] = useState("light")

    const handleThemeToggle = () => {
        setTheme(theme => theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme: handleThemeToggle }}>
            <div style={{ height: "100vh" }} className={`${theme}-theme`}>
                <TodoLayout>
                    <ThemeSwitcher />
                </TodoLayout>
            </div>
        </ThemeContext.Provider >)
}

export { App }