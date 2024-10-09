import { createContext, useState } from "react";

const themeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')

    const toggleThem = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = { theme, toggleThem }
    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}
export { themeContext, ThemeProvider }