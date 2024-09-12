import React from 'react'
import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})
// adding default value

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}
// Tailwind ke config andar darkMode class
