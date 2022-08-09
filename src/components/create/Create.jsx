import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import styles from "./styles/create.module.css";
import styleButton from "../globalStyles/buttonsStyle.module.css";

import TypeSelection from "./components/TypeSelection";
import NameAndImageInput from "./components/NameAndImageInput";
import NavBar from "../globalComponent/navBar";
import Stats from "./components/Stats";
import WeightAndHeight from "./components/WeightAndHeight";

import { postPokemon } from "../../redux/actions";
import { formValidatione } from "../../middlewares/formValidation";

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

export default function Create() {
  const [pokemon, setPokemon] = useState(pokemonDefault);
  const [err, setErr] = useState({ name: "", image: "", attribute: "" });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let existingPokemon = await axios
      .get("http://localhost:3001/pokemons?name=" + pokemon.name)
      .then(({ data }) => data);

    if (Object.keys(formValidatione(pokemon, existingPokemon)).length) {
      return setErr(formValidatione(pokemon, existingPokemon));
    }

    dispatch(postPokemon(pokemon));
    setPokemon(pokemonDefault);
    setErr({ name: "", image: "", attribute: "" });
    alert("successfully created Pokémon");
  };

  const handleChange = (e) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.create}>
      <NavBar currentPath="create" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.attribute}>
          <WeightAndHeight pokemon={pokemon} handleChange={handleChange} />
          <NameAndImageInput
            pokemon={pokemon}
            handleChange={handleChange}
            err={err}
          />
          <Stats pokemon={pokemon} handleChange={handleChange} />
        </div>
        <TypeSelection pokemon={pokemon} setPokemon={setPokemon} />

        <button type="submit" className={styleButton.submit}>
          CREATE
        </button>
      </form>
    </div>
  );
}
