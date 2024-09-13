import { render, screen } from '@testing-library/react'
import SearchBar from '../components/SearchBar'
import { describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('SearchBar', () => {
  it('rendet input and button', () => {
    render(<SearchBar onSearch={vi.fn()} onInputChange={vi.fn()} />)
    expect(screen.getByPlaceholderText('Search for a word')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('calls onSearch with the correct input value when the search button is clicked', async () => {
    const mockOnSearch = vi.fn()
    render(<SearchBar onSearch={mockOnSearch} onInputChange={vi.fn()} />)

    await userEvent.type(
      screen.getByPlaceholderText('Search for a word'),
      'test'
    )
    await userEvent.click(screen.getByText('Search'))

    expect(mockOnSearch).toHaveBeenCalledTimes(1)
    expect(mockOnSearch).toHaveBeenCalledWith('test')
  })
})
