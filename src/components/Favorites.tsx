import React from 'react';
import { WordData } from '../types'; 

interface FavoritesProps {
  favorites: WordData[];
  onRemoveFavorite: (word: WordData) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, onRemoveFavorite }) => {
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>You have no favorites yet</p>
      ) : (
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              {favorite.word} 
              <button onClick={() => onRemoveFavorite(favorite)}>
                Ta bort
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
