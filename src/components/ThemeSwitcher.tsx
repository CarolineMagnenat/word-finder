import React from 'react';

interface ThemeSwitcherProps {
  toggleTheme: () => void; 
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme }) => {
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeSwitcher;
