import { render, screen, waitFor } from '@testing-library/react'; 
import App from '../App';
import userEvent from '@testing-library/user-event'; 
import { describe, expect, it, vi } from 'vitest';
import SearchBar from '../components/SearchBar';

describe('TeamSwitcher Component', () => {
  it('should render ThemeSwitcher and toggle theme', async () => {
    render(<App />);

    const button = screen.getByText('Toggle Theme');

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(document.body.className).toBe('dark'); 

    await userEvent.click(button);
    expect(document.body.className).toBe('light'); 
  });
});

describe('SearchBar Component', () => {
    it('calls onSearch with the correct input value when the search button is clicked', async () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} onInputChange={vi.fn()} />);
    
    await userEvent.type(screen.getByPlaceholderText('Search for a word'), 'test');
    await userEvent.click(screen.getByText('Search'));
    
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });

  it('calls onInputChange when the input value changes', async () => {
    const mockOnInputChange = vi.fn();
    render(<SearchBar onSearch={vi.fn()} onInputChange={mockOnInputChange} />);
    
    await userEvent.type(screen.getByPlaceholderText('Search for a word'), 'test');
    
    expect(mockOnInputChange).toHaveBeenCalledTimes(4); 
  });

  it('renders the searched word when button is clicked.', async () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText('Search for a word');
    const searchButton = screen.getByText('Search');

    await userEvent.type(searchInput, 'test');
    await userEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText('test')).toBeInTheDocument();
      expect(screen.getByText('A challenge, trial.')).toBeInTheDocument();
      expect(screen.getByText('To challenge.')).toBeInTheDocument();
    });
  })

  it('renders error when word is not found and button is clicked.', async () => {
    
  })

  it('renders error when searchbar is emty and button is clicked.', async () => {
    
  })

})

