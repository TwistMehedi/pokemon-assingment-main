import axios from "axios";
import React, { useEffect, useState } from "react";
 import PokemonTypes from "../componnent/PokemonTypes";
 import Pagination from "../componnent/Pagination";
 import PokeMon from "../componnent/PokeMon";

const Home = () => {
  const [pokemons, setPokemon] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(9);
   
    // const response = await axios.get("https://pokeapi.co/api/v2/type");
    
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemon50Data = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=50`
        );
        const results = pokemon50Data.data.results;

        const pokeMonData = await Promise.all(
          results.map(async (pokemon) => {
            const pokeMonImage = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              image: pokeMonImage.data.sprites.front_default,
            };
          })
        );
        setPokemon(pokeMonData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPokemonData();
  }, []);

  const lastIndexOfPage = currentPage * pokemonPerPage;
  const firstIndexOfPage = lastIndexOfPage - pokemonPerPage;

  const filteredPokemon = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "baseStats") {
        return b.baseStats - a.baseStats;
      }
      return 0;
    })
    .slice(firstIndexOfPage, lastIndexOfPage)

  return (
    <div>
       <div className="flex justify-center items-cente justify-around">
       <input
        type="text"
        placeholder="Search Pokemon Name"
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"

      />

      <div className="flex justify-between mb-4">
        <select
          className="border p-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="baseStats">Base Stats</option>
        </select>
      </div>
      <PokemonTypes></PokemonTypes>
       </div>

      <h1 className="text-center text-xl my-4 font-bold">Pokémon Explorer</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 p-4'>
      {filteredPokemon.map((pokemon) => (
        <PokeMon className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 ' key={pokemon.name} pokemon={pokemon} />
      ))}
      </div>

      <Pagination
        totalPokemon={pokemons.length}
        pokemonPerPage={pokemonPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Home;
