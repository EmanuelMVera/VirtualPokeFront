import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/pokemonsAllCards.module.css";

import PokemonSingleCard from "./PokemonSingleCard";

import filteredByCreated from "../middlewares/filteredByCreated";
import filteredByTypes from "../middlewares/filteredByTypes";
import orderBy from "../middlewares/orderBy";

export default function PokemonsAllCards() {
  let pokemons = useSelector((state) => state.filteredPokemons);
  let filterCreated = useSelector((state) => state.filterCreated);
  let filterOrderBy = useSelector((state) => state.filterOrderBy);
  let filterTypes = useSelector((state) => state.filterTypes);
  let page = useSelector((state) => state.page);

  let pageArray = [];
  for (let i = page * 12; i <= page * 12 + 11; i++) {
    pageArray.push(i);
  }
  

  pokemons = filteredByCreated(pokemons, filterCreated);
  pokemons = filteredByTypes(pokemons, filterTypes);
  pokemons = orderBy(pokemons, filterOrderBy);

  return (
    <div className={styles.cards}>
      {pokemons.length ? (
        pokemons.map((pokemon, index) => {
          if (pageArray.includes(index)) {
            return (
              <PokemonSingleCard
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          } else {
            return console.log("Cargando pokemons...");
          }
        })
      ) : (
        <h1>Cargando....</h1>
      )}
    </div>
  );
}
