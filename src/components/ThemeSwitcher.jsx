import { useContext } from "react"

import { ThemeContext } from "../context/ThemeContext"

import moon from "./../assets/images/icon-moon.svg"
import sun from "./../assets/images/icon-sun.svg"

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return <button className="theme-switcher" onClick={toggleTheme}><img src={theme === "dark" ? sun : moon} /></button>
}

export { ThemeSwitcher }