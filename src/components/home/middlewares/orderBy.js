export default function orderBy(arrayPokemons, orderType) {
    if (orderType === "default") {
      return arrayPokemons;
    } else {
      if (
        orderType === "ascendingAlphabet" ||
        orderType === "descendingAlphabet"
      ) {
        return arrayPokemons.sort((a, b) => {
          if (a.name < b.name) {
            return orderType === "ascendingAlphabet" ? -1 : 1;
          }
          if (a.name > b.name) {
            return orderType === "ascendingAlphabet" ? 1 : -1;
          }
          return 0;
        });
      }
      if (
        orderType === "ascendingAtack" ||
        orderType === "descendingAtack"
      ) {
        return arrayPokemons.sort((a, b) => {
          if (a.strength < b.strength) {
            return orderType === "descendingAtack" ? -1 : 1;
          }
          if (a.strength > b.strength) {
            return orderType === "descendingAtack" ? 1 : -1;
          }
          return 0;
        });
      }
    }
  }