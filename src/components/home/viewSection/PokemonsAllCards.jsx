import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { useGetPokemonsQuery } from "../../../redux/api/pokemonApi";
import filteredByCreated from "../middlewares/filteredByCreated";
import filteredByTypes from "../middlewares/filteredByTypes";
import orderBy from "../middlewares/orderBy";

import PokemonSingleCard from "./PokemonSingleCard";
import Paginated from "./Paginated";
import Loader from "../../globalComponent/Loader";

const ITEMS_PER_PAGE = 12;

export default function PokemonsAllCards() {
  const { data: allPokemons, isLoading } = useGetPokemonsQuery();
  const { filterCreated, filterTypes, filterOrderBy, page } = useSelector(
    (state) => state.pokemon
  );

  const filteredPokemons = useMemo(() => {
    if (!allPokemons) return [];
    let result = filteredByCreated(allPokemons, filterCreated);
    result = filteredByTypes(result, filterTypes);
    result = orderBy(result, filterOrderBy);
    return result;
  }, [allPokemons, filterCreated, filterTypes, filterOrderBy]);

  const currentPagePokemons = filteredPokemons.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <Paginated totalCount={filteredPokemons.length} />
      {currentPagePokemons.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <span className="text-5xl mb-4">🔍</span>
          <p className="text-gray-400 text-lg">No Pokémon found for the selected filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 p-4">
          {currentPagePokemons.map((pokemon) => (
            <PokemonSingleCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
      {filteredPokemons.length > ITEMS_PER_PAGE && (
        <Paginated totalCount={filteredPokemons.length} />
      )}
    </>
  );
}
