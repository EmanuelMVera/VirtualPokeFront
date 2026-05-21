import React from "react";

export default function WeightAndHeight({ pokemon, handleChange }) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="text-gray-400 text-sm block mb-1">Height (in)</label>
        <input
          type="number"
          name="height"
          value={pokemon.height}
          min="0"
          max="100"
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500 transition-colors"
        />
      </div>
      <div>
        <label className="text-gray-400 text-sm block mb-1">Weight (lbs)</label>
        <input
          type="number"
          name="weight"
          value={pokemon.weight}
          min="0"
          max="100"
          onChange={handleChange}
          className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500 transition-colors"
        />
      </div>
    </div>
  );
}
