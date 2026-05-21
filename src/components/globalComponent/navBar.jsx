import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import DirectionButton from "./DirectionButton";

export default function NavBar({ currentPath, functionPath }) {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-4 h-16 flex items-center justify-between sticky top-0 z-50">
      <Link to="/home" className="text-green-400 font-black text-xl tracking-tight">
        ⚡ Virtual Pokédex
      </Link>

      <div className="flex items-center gap-3">
        {currentPath === "home" && (
          <>
            <SearchBar />
            <Link
              to="/create"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-xl transition-colors duration-200 text-sm whitespace-nowrap"
            >
              + Create
            </Link>
          </>
        )}

        {(currentPath === "create" || currentPath === "detail") && (
          <DirectionButton
            nextPath="home"
            nameNextPath="← Back to Home"
            functionPath={functionPath}
          />
        )}
      </div>
    </nav>
  );
}
