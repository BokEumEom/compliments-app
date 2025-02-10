// src/pages/Favorites.jsx

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import './Favorites.module.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('complimentFavorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFavorite = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
    localStorage.setItem('complimentFavorites', JSON.stringify(updatedFavorites));
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('complimentFavorites');
  };

  return (
    <div className="favorites-page">
      <Header title="즐겨찾기" showBackButton={true} />
      <div className="favorites-content">
        {favorites.length === 0 ? (
          <p>아직 즐겨찾기한 칭찬 메시지가 없습니다.</p>
        ) : (
          <div className="favorites-list">
            {favorites.map((item, index) => (
              <div key={index} className="favorite-item">
                <div className="favorite-message">{item.message}</div>
                <button className="remove-favorite" onClick={() => removeFavorite(index)}>
                  삭제
                </button>
              </div>
            ))}
          </div>
        )}
        {favorites.length > 0 && (
          <button className="clear-favorites-button" onClick={clearFavorites}>
            전체 삭제
          </button>
        )}
      </div>
    </div>
  );
};

export default Favorites;
