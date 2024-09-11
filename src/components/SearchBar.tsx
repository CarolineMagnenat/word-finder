import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (word: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue);
    } else {
      alert('Sökfältet kan inte vara tomt!');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
