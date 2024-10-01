// import React from 'react'
// import { WordData } from '../types'

// // Definierar props-typen för komponenten. Innehåller en lista med favoriter och en funktion för att ta bort ett favoritsord.
// interface FavoritesProps {
//   favorites: WordData[]
//   onRemoveFavorite: (word: WordData) => void
// }

// // Komponent som visar en lista med favoritsord. Om ingen favorit finns, visas ett meddelande.
// const Favorites: React.FC<FavoritesProps> = ({
//   favorites,
//   onRemoveFavorite,
// }) => {
//   return (
//     <div>
//       <h2>Favorites</h2>
//       {favorites.length === 0 ? (
//         <p>You have no favorites yet</p>
//       ) : (
//         <ul aria-label="Favorites">
//           {favorites.map((favorite, index) => (
//             <li key={index}>
//               {favorite.word}

//               <button onClick={() => onRemoveFavorite(favorite)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Favorites

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
        <ul className="favorites-list" aria-label="Favorites">
          {favorites.map((favorite, index) => {
            // Get the first meaning if it exists
            const firstMeaning = favorite.meanings[0]

            return (
              <li key={index} className="favorite-item">
                <strong>{favorite.word}</strong>
                {firstMeaning && (
                  <div>
                    {firstMeaning.definitions.length > 0 && (
                      <p>{firstMeaning.definitions[0].definition}</p>
                    )}
                  </div>
                )}
                <button onClick={() => onRemoveFavorite(favorite)}>
                  Remove
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Favorites
