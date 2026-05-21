import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLazyGetPokemonByNameQuery } from "../../redux/api/pokemonApi";
import { setPokemonByName } from "../../redux/slices/pokemonSlice";

export default function SearchBar() {
  const [pokemonName, setPokemonNameLocal] = useState("");
  const dispatch = useDispatch();
  const [triggerSearch, { isFetching }] = useLazyGetPokemonByNameQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pokemonName.trim()) return;
    try {
      const result = await triggerSearch(pokemonName).unwrap();
      dispatch(setPokemonByName(result));
    } catch {
      dispatch(setPokemonByName({ name: "err" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => setPokemonNameLocal(e.target.value)}
        value={pokemonName}
        className="bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500 w-40 sm:w-48 transition-colors"
      />
      <button
        type="submit"
        disabled={isFetching}
        className="bg-red-500 hover:bg-red-400 disabled:bg-gray-600 text-white font-bold py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
      >
        {isFetching ? "..." : "Search"}
      </button>
    </form>
  );
}
