import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPokemonByName } from "../../../redux/slices/pokemonSlice";
import { TYPE_COLORS } from "../../../constants/typeColors";

export default function CardPokemon() {
  const pokemon = useSelector((state) => state.pokemon.pokemonByName);
  const dispatch = useDispatch();

  if (!pokemon) return null;

  const reset = () => dispatch(clearPokemonByName());

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={reset}
    >
      <div
        className="bg-gray-900 rounded-2xl p-6 max-w-sm w-full border border-gray-700 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={reset}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-400 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
        >
          ×
        </button>

        {pokemon.name === "err" ? (
          <div className="py-8 text-center">
            <span className="text-4xl block mb-3">😕</span>
            <p className="text-gray-400">Pokémon not found</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 pt-2">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-32 h-32 object-contain"
            />
            <h2 className="text-white font-bold text-xl capitalize">{pokemon.name}</h2>
            <div className="flex gap-2 flex-wrap justify-center">
              {pokemon.types?.map((type, i) => (
                <span
                  key={i}
                  className="type-badge"
                  style={{ backgroundColor: TYPE_COLORS[type] || "#666" }}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
