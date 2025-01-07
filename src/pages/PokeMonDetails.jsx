import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
 
const PokeMonDetails = () => {
    const {name} = useParams();
    // console.log(name);
    const [pokemon, setPokemon] = useState(null);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

    console.log(pokemon);
    
    useEffect(() => {
      const fetchDetails = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      };
      fetchDetails();
    }, [name]);


    const addToFavorites = (pokemon) => {
      if (!favorites.some((fav) => fav.name === pokemon.name)) {
        const updatedFavorites = [...favorites, pokemon];
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
    };

    if (!pokemon) return <p>Loading...</p>;

  return (
    <div className='flex flex-col text-center'>
        <h1 className="text-center text-3xl mb-4">{name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="block mx-auto" />
         
      <h2 className="text-xl mt-4">Abilities:</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2 className="text-xl mt-4">Types:</h2>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      <h2 className="text-xl mt-4">Base Stats:</h2>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
        <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w[25]"
        onClick={() => addToFavorites(pokemon)}
      >
        Add to Favorites
      </button>
      </ul>
     </div>
  )
}

export default PokeMonDetails
