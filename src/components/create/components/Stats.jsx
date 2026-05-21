import React from "react";

const STATS = [
  { label: "Health Points (HP)", name: "hp" },
  { label: "Attack Power (AP)", name: "strength" },
  { label: "Defense", name: "defense" },
  { label: "Speed", name: "speed" },
];

export default function Stats({ pokemon, handleChange }) {
  return (
    <div className="flex flex-col gap-3">
      {STATS.map(({ label, name }) => (
        <div key={name}>
          <div className="flex justify-between text-sm mb-1">
            <label className="text-gray-400">{label}</label>
            <span className="text-green-400 font-bold">{pokemon[name]}</span>
          </div>
          <input
            type="range"
            name={name}
            value={pokemon[name]}
            min="0"
            max="100"
            onChange={handleChange}
            className="w-full accent-green-500"
          />
        </div>
      ))}
    </div>
  );
}
