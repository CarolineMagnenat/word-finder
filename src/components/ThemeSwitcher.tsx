import React from 'react'

// Definierar props som ThemeSwitcher-komponenten kommer att ta emot
interface ThemeSwitcherProps {
  toggleTheme: () => void // Funktion för att växla tema
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme }) => {
  return <button onClick={toggleTheme}>Toggle Theme</button>
}

export default ThemeSwitcher
