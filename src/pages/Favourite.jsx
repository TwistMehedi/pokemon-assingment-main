import React from 'react'
import { Link } from 'react-router';

const Favourite = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      <h1 className="text-center text-3xl my-4">Favorites</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
        {favorites.length ? (
          favorites.map((pokemon) => (
            <div key={pokemon.name} className="border p-4 text-center">
              <img src={pokemon.image} alt={pokemon.name} />
              <h3 className="text-xl">{pokemon.name}</h3>
              <Link to={`/pokemon/${pokemon.name}`}>
                <button className="bg-blue-500 text-white px-2 py-1 rounded mt-2">View Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center">No favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favourite
