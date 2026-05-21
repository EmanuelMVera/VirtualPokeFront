import React from "react";
import { useGetTypesQuery } from "../../../redux/api/pokemonApi";
import { TYPE_COLORS } from "../../../constants/typeColors";

export default function TypeSelection({ pokemon, setPokemon }) {
  const { data: types = [] } = useGetTypesQuery();

  const handleToggle = (id) => {
    if (pokemon.typesId.includes(id)) {
      setPokemon({ ...pokemon, typesId: pokemon.typesId.filter((i) => i !== id) });
    } else if (pokemon.typesId.length < 2) {
      setPokemon({ ...pokemon, typesId: [...pokemon.typesId, id] });
    }
  };

  return (
    <div className="mt-4">
      <p className="text-gray-400 text-sm mb-3">
        Select up to 2 types{" "}
        <span className="text-gray-600">({pokemon.typesId.length}/2 selected)</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {types.map(({ id, name }) => {
          const isSelected = pokemon.typesId.includes(id);
          const color = TYPE_COLORS[name] || "#666";
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleToggle(id)}
              className="type-badge transition-all duration-150"
              style={{
                backgroundColor: isSelected ? color : "transparent",
                border: `2px solid ${color}`,
                color: isSelected ? "white" : color,
                opacity: !isSelected && pokemon.typesId.length >= 2 ? 0.4 : 1,
                cursor: !isSelected && pokemon.typesId.length >= 2 ? "not-allowed" : "pointer",
              }}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
