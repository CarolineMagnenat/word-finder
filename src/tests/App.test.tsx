import { render, screen, waitFor, within } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import SearchBar from '../components/SearchBar'

describe('TeamSwitcher Component', () => {
  it('should render ThemeSwitcher and toggle theme', async () => {
    render(<App />)

    const button = screen.getByText('Toggle Theme')

    expect(button).toBeInTheDocument()

    await userEvent.click(button)
    expect(document.body.className).toBe('dark')

    await userEvent.click(button)
    expect(document.body.className).toBe('light')
  })
})

describe('SearchBar Component', () => {
  it('calls onInputChange when the input value changes', async () => {
    const mockOnInputChange = vi.fn()
    render(<SearchBar onSearch={vi.fn()} onInputChange={mockOnInputChange} />)

    await userEvent.type(
      screen.getByPlaceholderText('Search for a word'),
      'test'
    )

    expect(mockOnInputChange).toHaveBeenCalledTimes(4)
  })

  it('renders the searched word when button is clicked.', async () => {
    render(<App />)

    const searchInput = screen.getByPlaceholderText('Search for a word')
    const searchButton = screen.getByText('Search')

    await userEvent.type(searchInput, 'test')
    await userEvent.click(searchButton)

    await waitFor(() => {
      expect(screen.getByText('test')).toBeInTheDocument()
      expect(screen.getByText('A challenge, trial.')).toBeInTheDocument()
      expect(screen.getByText('To challenge.')).toBeInTheDocument()
    })
  })

  it('renders the searched word when button is clicked.', async () => {
    render(<App />)

    const searchInput = screen.getByPlaceholderText('Search for a word')
    const searchButton = screen.getByText('Search')

    await userEvent.type(searchInput, 'test')
    await userEvent.click(searchButton)

    await waitFor(() => {
      expect(screen.getByText('test')).toBeInTheDocument()
      expect(screen.getByText('A challenge, trial.')).toBeInTheDocument()
      expect(screen.getByText('To challenge.')).toBeInTheDocument()

      const playSoundButton = screen.getByText(/🔊 Play sound/i)
      expect(playSoundButton).toBeInTheDocument()

      userEvent.click(playSoundButton)
    })
  })

  it('renders error when word is not found and button is clicked.', async () => {
    render(<App />)
    const searchInput = screen.getByPlaceholderText('Search for a word')
    const searchButton = screen.getByText('Search')

    await userEvent.type(searchInput, 'aik')
    await userEvent.click(searchButton)

    await waitFor(() => {
      expect(
        screen.getByText('The word could not be found.')
      ).toBeInTheDocument()
    })
  })

  it('renders error when searchbar is emty and button is clicked.', async () => {
    render(<App />)
    const searchButton = screen.getByText('Search')

    await userEvent.click(searchButton)

    await waitFor(() => {
      expect(screen.getByText('You must enter a word.')).toBeInTheDocument()
    })
  })

  it('plays the audio when the play button is clicked', async () => {
    render(<App />)

    const searchInput = screen.getByPlaceholderText('Search for a word')
    const searchButton = screen.getByText('Search')

    await userEvent.type(searchInput, 'test')
    await userEvent.click(searchButton)

    await waitFor(() => {
      expect(screen.getByText('test')).toBeInTheDocument()
    })

    const playSoundButton = screen.getByText(/🔊 Play sound/i)
    expect(playSoundButton).toBeInTheDocument()

    const audioPlayMock = vi
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(() => Promise.resolve())
    await userEvent.click(playSoundButton)
    expect(audioPlayMock).toHaveBeenCalledTimes(1)

    audioPlayMock.mockRestore()
  })
})

describe('Favorite Component', () => {
  it('renderas favvisen i favislistan', async () => {
    render(<App />)

    const searchInput = screen.getByPlaceholderText('Search for a word')
    const searchButton = screen.getByText('Search')

    await userEvent.type(searchInput, 'test')
    await userEvent.click(searchButton)

    expect(await screen.findByText('test')).toBeInTheDocument()

    const addToFavoritesButton = screen.getByText('Add to favorites')
    expect(addToFavoritesButton).toBeInTheDocument()

    await userEvent.click(addToFavoritesButton)

    const Favorites = screen.getByLabelText('Favorites')

    expect(within(Favorites).getByText('test')).toBeInTheDocument()

    const removeButton = screen.getByText('Remove')
    await userEvent.click(removeButton)

    expect(within(Favorites).getByText('test')).not.toBeInTheDocument()
  })

  it('testa knappen för att lägga till i favvisar', async () => {
    render(<App />)

    const searchInput = screen.getByPlaceholderText('Search for a word')
    const searchButton = screen.getByText('Search')

    await userEvent.type(searchInput, 'test')
    await userEvent.click(searchButton)

    expect(await screen.findByText('test')).toBeInTheDocument()

    const addToFavoritesButton = screen.getByText('Add to favorites')
    expect(addToFavoritesButton).toBeInTheDocument()

    await userEvent.click(addToFavoritesButton)
    expect(screen.getByText('Remove from favorites')).toBeInTheDocument()
  })
})
