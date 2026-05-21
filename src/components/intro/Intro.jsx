import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-6">
          <span className="text-6xl">⚡</span>
        </div>
        <h1 className="text-6xl font-black text-white mb-4 tracking-tight">
          Virtual{" "}
          <span className="text-green-400">Pokédex</span>
        </h1>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          Browse, search, and create Pokémon using the PokéAPI.
          <br />
          Over 40 Pokémon from the original series.
        </p>
        <Link
          to="/home"
          className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-200 text-lg shadow-lg shadow-green-900/30 hover:shadow-green-900/50 hover:-translate-y-0.5"
        >
          Start Exploring →
        </Link>
      </div>
    </div>
  );
}
