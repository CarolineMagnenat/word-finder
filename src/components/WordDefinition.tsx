import React from 'react'
import { WordData } from '../types'

// Definierar props som WordDefinition-komponenten kommer att ta emot
interface WordDefinitionProps {
  wordData: WordData
  onAddFavorite: (word: WordData) => void
  onRemoveFavorite: (word: WordData) => void
  isFavorite: boolean
}

const WordDefinition: React.FC<WordDefinitionProps> = ({
  wordData,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {
  // Hanterar fall där ingen data är tillgänglig
  if (!wordData || !wordData.word) {
    return <div>No data available for this word.</div>
  }

  return (
    <div>
      <h2>{wordData.word}</h2>
      {wordData.phonetics.length > 0 && (
        <div>
          {wordData.phonetics[0]?.text && (
            <p>Uttal: {wordData.phonetics[0].text}</p>
          )}
          {wordData.phonetics[0]?.audio && (
            <button
              onClick={() => new Audio(wordData.phonetics[0].audio).play()}
            >
              🔊 Play sound
            </button>
          )}
        </div>
      )}
      {wordData.meanings.length > 0 && (
        <div>
          <h3>Meanings:</h3>
          {wordData.meanings.slice(0, 2).map((meaning, index) => (
            <div key={index} className="meaning">
              <h4>{meaning.partOfSpeech}</h4>
              {meaning.definitions.slice(0, 2).map((definition, defIndex) => (
                <div key={defIndex}>
                  <p>{definition.definition}</p>
                  {definition.example && (
                    <p>
                      <em>Example: {definition.example}</em>
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() =>
          isFavorite ? onRemoveFavorite(wordData) : onAddFavorite(wordData)
        }
      >
        {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      </button>
    </div>
  )
}

export default WordDefinition
