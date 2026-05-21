import React from "react";
import silueta from "./silueta.png";

export default function NameAndImageInput({ pokemon, handleChange, err }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <input
          type="text"
          placeholder="Pokémon name..."
          name="name"
          autoComplete="off"
          value={pokemon.name}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500 transition-colors"
        />
        {err.name && (
          <p className="text-red-400 text-xs mt-1">{err.name}</p>
        )}
      </div>

      <div className="flex justify-center">
        <img
          src={pokemon.image || silueta}
          alt="pokemon preview"
          className="w-24 h-24 object-contain rounded-xl bg-gray-800 p-2"
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Image URL (optional)..."
          name="image"
          value={pokemon.image}
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500 transition-colors"
        />
        {err.image && (
          <p className="text-red-400 text-xs mt-1">{err.image}</p>
        )}
      </div>
    </div>
  );
}
