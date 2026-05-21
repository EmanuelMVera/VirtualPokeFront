import React from "react";
import { Link } from "react-router-dom";
import { TYPE_COLORS } from "../../../constants/typeColors";

const PLACEHOLDER = "https://w7.pngwing.com/pngs/248/960/png-transparent-pikachu-pokemon-go-silhouette-drawing-pikachu-dog-like-mammal-fictional-character-black.png";

export default function PokemonSingleCard({ pokemon }) {
  return (
    <Link
      to={`/detail/${pokemon.id}`}
      className="group bg-gray-900 border border-gray-800 hover:border-green-500 rounded-2xl overflow-hidden flex flex-col items-center p-3 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
    >
      <div className="w-full aspect-square bg-gray-800 rounded-xl overflow-hidden mb-2 flex items-center justify-center">
        <img
          src={pokemon.image || PLACEHOLDER}
          alt={pokemon.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <span className="text-white font-bold text-sm capitalize mb-2 truncate w-full text-center">
        {pokemon.name}
      </span>
      <div className="flex gap-1 flex-wrap justify-center">
        {pokemon.types?.map((type, index) => (
          <span
            key={index}
            className="type-badge"
            style={{ backgroundColor: TYPE_COLORS[type] || "#666" }}
          >
            {type}
          </span>
        ))}
      </div>
    </Link>
  );
}
