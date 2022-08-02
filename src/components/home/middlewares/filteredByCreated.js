export default function filteredByCreated(arrayPokemons, filterCreated) {
  arrayPokemons = arrayPokemons.filter((pokemon) => {
    switch (filterCreated) {
      case "api":
        return pokemon.created === false;

      case "db":
        return pokemon.created === true;

      default:
        return pokemon;
    }
  });

  return arrayPokemons;
}
