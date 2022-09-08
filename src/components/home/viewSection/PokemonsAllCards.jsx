import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/pokemonsAllCards.module.css";

import PokemonSingleCard from "./PokemonSingleCard";

import filteredByCreated from "../middlewares/filteredByCreated";
import filteredByTypes from "../middlewares/filteredByTypes";
import orderBy from "../middlewares/orderBy";
import Paginated from "./Paginated";
import Loader from "../../globalComponent/Loader";

export default function PokemonsAllCards() {
  let pokemons = useSelector((state) => state.filteredPokemons);
  let filterCreated = useSelector((state) => state.filterCreated);
  let filterOrderBy = useSelector((state) => state.filterOrderBy);
  let filterTypes = useSelector((state) => state.filterTypes);

  const pokemonsCreated = useSelector((state) =>
    filteredByCreated(state.pokemons, filterCreated)
  );
  const pokemonsOrderBy = useSelector((state) =>
    filteredByCreated(state.pokemons, filterOrderBy)
  );
  const pokemonsTypes = useSelector((state) =>
    filteredByCreated(state.pokemons, filterTypes)
  );

  console.log("created: " + pokemonsCreated);
  console.log("Order: " + pokemonsOrderBy);
  console.log("types: " + pokemonsTypes);

  let page = useSelector((state) => state.page);

  let pageArray = [];
  for (let i = page * 12; i <= page * 12 + 11; i++) {
    pageArray.push(i);
  }

  pokemons = filteredByCreated(pokemons, filterCreated);
  pokemons = filteredByTypes(pokemons, filterTypes);
  pokemons = orderBy(pokemons, filterOrderBy);

  return (
    <>
      <Paginated pokemons={pokemons} />
      {pokemons.length ? (
        <div className={styles.cards}>
          {pokemons.map((pokemon, index) => {
            return (
              pageArray.includes(index) && (
                <PokemonSingleCard key={pokemon.id} pokemon={pokemon} />
              )
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
      <Paginated pokemons={pokemons} />
    </>
  );
}
