import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import SearchBar from '../components/SearchBar';
import { describe, expect, it, vi } from 'vitest'; 


describe('SearchBar', () => {
  it('rendet input and button', () => {
    render(<SearchBar onSearch={vi.fn()} />)
    expect(screen.getByPlaceholderText('Search for a word')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })
})
