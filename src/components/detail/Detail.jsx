import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../../redux/api/pokemonApi";
import { TYPE_COLORS } from "../../constants/typeColors";

import NavBar from "../globalComponent/navBar";
import Loader from "../globalComponent/Loader";

export default function Detail() {
  const { idPokemon } = useParams();
  const navigate = useNavigate();
  const { data: pokemon, isLoading, isError } = useGetPokemonByIdQuery(idPokemon);

  return (
    <div className="min-h-screen bg-gray-950">
      <NavBar currentPath="detail" functionPath={() => navigate("/home")} />

      <div className="max-w-2xl mx-auto px-4 py-8">
        {isLoading && <Loader />}

        {isError && (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">❌</span>
            <p className="text-gray-400 text-lg">Pokémon not found.</p>
          </div>
        )}

        {pokemon && (
          <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 flex flex-col items-center">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-48 h-48 object-contain drop-shadow-2xl"
              />
              <h1 className="text-4xl font-black text-white capitalize mt-4">
                {pokemon.name}
              </h1>
              <span className="text-gray-500 text-sm mt-1">
                #{String(pokemon.id).padStart(3, "0")}
              </span>
              <div className="flex gap-2 mt-3 flex-wrap justify-center">
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

            <div className="p-6 space-y-4">
              {[
                { label: "HP", value: pokemon.hp },
                { label: "Attack", value: pokemon.strength },
                { label: "Defense", value: pokemon.defense },
                { label: "Speed", value: pokemon.speed },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{label}</span>
                    <span className="text-white font-bold">{value}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="stat-bar"
                      style={{ width: `${Math.min((value / 255) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Weight
                  </div>
                  <div className="text-white font-bold text-lg">{pokemon.weight} lbs</div>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 text-center">
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    Height
                  </div>
                  <div className="text-white font-bold text-lg">{pokemon.height} in</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
