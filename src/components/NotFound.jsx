import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-black text-green-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-white mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-8">
        This Pokémon escaped into the wild and we couldn&apos;t catch it.
      </p>
      <Link
        to="/home"
        className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-xl transition-colors duration-200"
      >
        Back to Pokédex
      </Link>
    </div>
  );
}
