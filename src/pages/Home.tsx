import React, { useState, useEffect } from 'react'
import { fetchWordDefinition } from '../services/dictionaryService'
import SearchBar from '../components/SearchBar'
import WordDefinition from '../components/WordDefinition'
import Error from '../components/Error'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Favorites from '../components/Favorites'
import { WordData } from '../types'

const Home: React.FC = () => {
  const [wordData, setWordData] = useState<WordData | null>(null)
  const [favorites, setFavorites] = useState<WordData[]>(
    JSON.parse(localStorage.getItem('favorites') ?? '[]')
  )
  const [error, setError] = useState<string | null>(null)
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') ?? 'light'
  )

  // Effekt för att läsa in sparade favoriter och tema vid första renderingen
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    } else {
      console.log('No saved favorites found.')
    }

    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.className = savedTheme
    } else {
      console.log('No saved theme found.')
    }
  }, [])

  // Effekt för att spara favoriter och tema i localStorage när de ändras
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
    localStorage.setItem('theme', theme)
    document.body.className = theme
  }, [favorites, theme])

  // Funktion för att söka efter ett ord och hämta dess definition
  const handleSearch = async (word: string) => {
    if (!word.trim()) {
      setError('You must enter a word.')
      setWordData(null)
      return
    }

    try {
      setError(null)
      const data = await fetchWordDefinition(word)
      setWordData(data[0] || null)
    } catch {
      setError('The word could not be found.')
    }
  }

  // Funktion för att rensa felmeddelande och orddata vid inputändring
  const handleInputChange = () => {
    if (error || wordData) {
      setError(null)
      setWordData(null)
    }
  }

  // Funktion för att lägga till ett ord i favoriter
  const handleAddFavorite = (word: WordData) => {
    setFavorites((prevFavorites) => [...prevFavorites, word])
  }

  // Funktion för att ta bort ett ord från favoriter
  const handleRemoveFavorite = (word: WordData) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.word !== word.word)
    )
  }

  // Funktion för att kontrollera om ett ord är en favorit
  const isFavorite = (word: WordData) => {
    return favorites.some((favorite) => favorite.word === word.word)
  }

  // Funktion för att växla mellan ljus och mörk tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="container">
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <SearchBar onSearch={handleSearch} onInputChange={handleInputChange} />
      {error && <Error message={error} />}
      {wordData && (
        <WordDefinition
          wordData={wordData}
          onAddFavorite={handleAddFavorite}
          onRemoveFavorite={handleRemoveFavorite}
          isFavorite={isFavorite(wordData)}
        />
      )}
      <Favorites
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
      />
    </div>
  )
}

export default Home
