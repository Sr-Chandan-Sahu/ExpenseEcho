import React, { useState } from 'react'
import useStore from '../store'

const ThemeSwitch = () => {
    const { theme, setTheme } = useStore(state)
    const [isDarkMode, setIsDarkMode] = useState(theme === "dark")

    const toggleTheme = () => {
        const newTheme = isDarkMode ? "light" : "dark";
        setIsDarkMode(!isDarkMode)
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }
    return (
        <div className={`switch ${isDarkMode ? "light":"dark"}`}>

        </div>
    )
}

export default ThemeSwitch
