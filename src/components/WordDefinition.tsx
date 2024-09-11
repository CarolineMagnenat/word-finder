import React from "react";
import { WordData } from "../types"; 

interface WordDefinitionProps {
  wordData: WordData;
  onAddFavorite: (word: WordData) => void;
  onRemoveFavorite: (word: WordData) => void;
  isFavorite: boolean;
}

const WordDefinition: React.FC<WordDefinitionProps> = ({
  wordData,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {
  // Kontrollera om `wordData` existerar och har nödvändig information
  if (!wordData || !wordData.word) {
    return <div>Ingen data tillgänglig för detta ord.</div>;
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
              🔊 Spela upp ljud
            </button>
          )}
        </div>
      )}
      {wordData.meanings.length > 0 && (
        <div>
          <h3>Betydelser:</h3>
          {wordData.meanings.slice(0, 2).map((meaning, index) => (
            <div key={index} className="meaning">
              <h4>{meaning.partOfSpeech}</h4>
              {meaning.definitions.slice(0, 2).map((definition, defIndex) => (
                <div key={defIndex}>
                  <p>{definition.definition}</p>
                  {definition.example && (
                    <p>
                      <em>Exempel: {definition.example}</em>
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
        {isFavorite ? "Ta bort från favoriter" : "Lägg till i favoriter"}
      </button>
    </div>
  );
};

export default WordDefinition;
