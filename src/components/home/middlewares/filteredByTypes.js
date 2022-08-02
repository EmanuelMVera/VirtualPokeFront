export default function filteredByTypes(arrayPokemons, type) {
  arrayPokemons = arrayPokemons
    .filter((pokemon) => pokemon.types)
    .filter((pokemon) => {
      if (type === "default") {
        return arrayPokemons;
      } else {
        return pokemon.types.includes(type);
      }
    });
  return arrayPokemons;
}
