import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styles from "./styles/create.module.css";
import styleButton from "../globalStyles/buttonsStyle.module.css";

import TypeSelection from "./components/TypeSelection";
import NameAndImageInput from "./components/NameAndImageInput";
import AttributeInput from "./components/AttributeInput";
import NavBar from "../globalComponent/navBar";
import { getPokemon } from "../../redux/actions";

let pokemonDefault = {
  name: "",
  image: "",
  hp: 0,
  strength: 0,
  defense: 0,
  speed: 0,
  height: 0,
  weight: 0,
  typesId: [],
};
const attributeRestriction = (num) => (num >= 0 && num <= 100 ? true : false);

export default function Create() {
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(pokemonDefault);
  const allPokemons = useSelector((state) => state.filteredPokemons);

  const handleSubmit = (e) => {
    dispatch(getPokemon());
    let allNamePokemons = allPokemons.map((poke) => poke.name);

    e.preventDefault();
    if (allNamePokemons.includes(pokemon.name)) {
      alert("Pokémon already exist");
    } else if (!pokemon.name.length) {
      alert("Pokémon name is required");
    } else if (
      !attributeRestriction(pokemon.hp) &&
      !attributeRestriction(pokemon.strength) &&
      !attributeRestriction(pokemon.defense) &&
      !attributeRestriction(pokemon.speed) &&
      !attributeRestriction(pokemon.height) &&
      !attributeRestriction(pokemon.weight)
    ) {
      alert("the attribute must be a value between 0 and 100");
    } else {
      axios.post("http://localhost:3001/pokemons", pokemon);
      setPokemon(pokemonDefault);
      alert("successfully created Pokémon");
    }
    dispatch(getPokemon());
  };
  const handleChange = (e) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.create}>
      <NavBar direction="home" labelDirection="BACK TO HOME" />
      <form onSubmit={handleSubmit} className={styles.form} autocomplete="off">
        <div className={styles.attribute}>
          <NameAndImageInput pokemon={pokemon} handleChange={handleChange} />
          <AttributeInput pokemon={pokemon} handleChange={handleChange} />
        </div>
        <TypeSelection pokemon={pokemon} setPokemon={setPokemon} />

        <button type="submit" className={styleButton.submit}>
          TO CREATE
        </button>
      </form>
    </div>
  );
}
