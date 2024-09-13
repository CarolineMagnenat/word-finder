import React from 'react'
import { WordData } from '../types'

// Definierar props-typen för komponenten. Innehåller en lista med favoriter och en funktion för att ta bort ett favoritsord.
interface FavoritesProps {
  favorites: WordData[]
  onRemoveFavorite: (word: WordData) => void
}

// Komponent som visar en lista med favoritsord. Om ingen favorit finns, visas ett meddelande.
const Favorites: React.FC<FavoritesProps> = ({
  favorites,
  onRemoveFavorite,
}) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>You have no favorites yet</p>
      ) : (
        <ul aria-label="Favorites">
          {favorites.map((favorite, index) => (
            <li key={index}>
              {favorite.word}
              <button onClick={() => onRemoveFavorite(favorite)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Favorites
