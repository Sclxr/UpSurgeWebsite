import React from 'react';
import allGames from '../../data/allGames.json';
import './games.css';

const getImagePath = (relativePath) => require(`../../assets/${relativePath}`);

const Games = () => {
  return (
    <section className="games-page">
      <h1>Available Games</h1>
      <p className="games-subtext">Browse all games we currently support for server hosting.</p>
      <div className="games-grid">
        {allGames.map((game, index) => (
          <a
            key={index}
            className="game-card"
            href={game.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImagePath(game.cover)} alt={game.name} className="game-image" />
            <div className="game-info">
              <h2>{game.name}</h2>
              <p>Starting at <strong>${game.price}</strong></p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Games;