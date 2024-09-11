// import React, { useState, useEffect } from 'react';


// const ThemeSwitcher: React.FC = () => {
//   const [ theme, setTheme ] = useState('light')

//   const toggleTheme = () => {
 
//     if (theme !== 'light') setTheme('light');
//     else setTheme('dark');
//   };

//   useEffect(() => {
//     document.body.className = theme; // Lägg till temaklassen på body-elementet
//   }, [theme]);

//   return <button onClick={toggleTheme}>Toggle Theme</button>;
// };

// export default ThemeSwitcher;




import React from 'react';

interface ThemeSwitcherProps {
  toggleTheme: () => void; // Mottar funktionen som prop
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme }) => {
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeSwitcher;
