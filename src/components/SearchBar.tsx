import React, { useState } from 'react'

// Definierar props som SearchBar-komponenten kommer att ta emot
interface SearchBarProps {
  onSearch: (word: string) => void
  onInputChange: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onInputChange }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onInputChange()
  }

  const handleSearch = () => {
    onSearch(inputValue)
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
