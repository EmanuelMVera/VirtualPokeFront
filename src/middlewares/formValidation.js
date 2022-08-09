const formValidatione = (pokemon, existingPokemon) => {
  let err = {};
  //validar nombre
  let ExpRegSoloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;

  if (pokemon.name === existingPokemon.name) {
    err.name = "Pokemon is already in the database";
  } else if (!ExpRegSoloLetras.test(pokemon.name ?? "")) {
    err.name = "Invalid name.";
  } else {
  }

  // Validacion para formato de imagenes
  let ExpRegURL = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))/i;
  if (!ExpRegURL.test(pokemon.image) && pokemon.image.length !== 0) {
    err.image = "invalid url.";
  }

  // validacion para numeros
  let ExpRegSoloNumeros = /^(0?[0-9]?[0-9]|1[0][0])$/;
  //   [pokemon.hp, pokemon.strength, pokemon.speed,pokemon.height,pokemon.weight].every(ExpRegSoloNumeros.test) || (err.attribute = "Invalid number")
  if (
    !ExpRegSoloNumeros.test(pokemon.hp) ||
    !ExpRegSoloNumeros.test(pokemon.strength) ||
    !ExpRegSoloNumeros.test(pokemon.defense) ||
    !ExpRegSoloNumeros.test(pokemon.speed) ||
    !ExpRegSoloNumeros.test(pokemon.height) ||
    !ExpRegSoloNumeros.test(pokemon.weight)
  ) {
    err.attribute = "invalid number";
  }

  return err;
};

module.exports = {
  formValidatione,
};
