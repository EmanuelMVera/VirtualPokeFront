const formValidation = (pokemon, existingPokemon) => {
  const err = {};
  const onlyLetters = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s-]+$/;

  if (pokemon.name === existingPokemon?.name) {
    err.name = "Pokemon is already in the database";
  } else if (!onlyLetters.test(pokemon.name ?? "")) {
    err.name = "Invalid name. Only letters allowed.";
  }

  const urlRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))/i;
  if (pokemon.image.length !== 0 && !urlRegex.test(pokemon.image)) {
    err.image = "Invalid image URL.";
  }

  const onlyNumbers = /^(0?[0-9]?[0-9]|1[0][0])$/;
  if (
    !onlyNumbers.test(pokemon.hp) ||
    !onlyNumbers.test(pokemon.strength) ||
    !onlyNumbers.test(pokemon.defense) ||
    !onlyNumbers.test(pokemon.speed) ||
    !onlyNumbers.test(pokemon.height) ||
    !onlyNumbers.test(pokemon.weight)
  ) {
    err.attribute = "Invalid number. Values must be 0-100.";
  }

  return err;
};

export { formValidation };
