import React from 'react';
import { render, screen } from '@testing-library/react'; 
import ThemeSwitcher from '../components/ThemeSwitcher';
import userEvent from '@testing-library/user-event'; 

const mockToggleTheme = jest.fn();

describe('ThemeSwitcher Component', () => {
  beforeEach(() => {
    document.body.className = 'light';
  });

  test('should toggle theme between light and dark', async () => {
    // Rendera komponenten
    render(<ThemeSwitcher toggleTheme={mockToggleTheme}/>);

    // Kolla så att body börjar med "light" tema
    expect(document.body.className).toBe('light');

    // Få tag på knappen genom dess text, använd screen istället för getByText
    const button = screen.getByText('Toggle Theme');

    // Klicka på knappen och kontrollera att mockToggleTheme anropas
    userEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);

    // Klicka på knappen igen och kontrollera att mockToggleTheme anropas igen
    userEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalledTimes(2);
  });
});
