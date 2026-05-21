import React from "react";
import { useSelector } from "react-redux";
import PokemonsAllCards from "./PokemonsAllCards";
import CardPokemon from "./CardPokemon";

export default function ViewSection() {
  const pokemonByName = useSelector((state) => state.pokemon.pokemonByName);

  return (
    <div className="flex-1">
      {pokemonByName !== null && <CardPokemon />}
      <PokemonsAllCards />
    </div>
  );
}
