import { useContext } from "react"

import { ThemeContext } from "../context/ThemeContext"

import moon from "./../assets/images/icon-moon.svg"
import sun from "./../assets/images/icon-sun.svg"

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 2000)
    }

    const handleThemeToggle = () => {
        toggleTheme()
        trans()
    }

    return <button className="theme-switcher" onClick={handleThemeToggle}><img src={theme === "dark" ? sun : moon} /></button>
}

export { ThemeSwitcher }