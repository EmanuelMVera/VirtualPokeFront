import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import styles from "./styles/create.module.css";
import styleButton from "../globalStyles/buttonsStyle.module.css";

import TypeSelection from "./components/TypeSelection";
import NameAndImageInput from "./components/NameAndImageInput";
import NavBar from "../globalComponent/navBar";
import { getPokemon } from "../../redux/actions";
import Stats from "./components/Stats";
import WeightAndHeight from "./components/WeightAndHeight";

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
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(pokemonDefault);
  const [err, setErr] = useState({ errName: "", errImage: "" });
  const allPokemons = useSelector((state) => state.filteredPokemons);
  let allNamePokemons = allPokemons.map((poke) => poke.name);

  // Validacion para formato de imagenes
  let imageTypes = ["bmp", "gif", "jpg", "tif", "png", "jpeg", "svg"];
  const imageValidation = (img) => {
    let ext = img.split(".").pop();
    if (ext === undefined) {
      return false;
    } else {
      return imageTypes.includes(ext);
    }
  };

  // validacion para numeros
  // const attributeRestriction = (num) =>
  //   isNaN(num) && num >= 0 && num <= 100 ? true : false;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (allNamePokemons.includes(pokemon.name) || !pokemon.name.length) {
      setErr({ ...err, errName: "invalid name" });
    } else if (pokemon.image.length !== 0 && !imageValidation(pokemon.image)) {
      setErr({ ...err, errImage: "invalid url" });
    }
    // else if (
    //   !attributeRestriction(pokemon.hp) &&
    //   !attributeRestriction(pokemon.strength) &&
    //   !attributeRestriction(pokemon.defense) &&
    //   !attributeRestriction(pokemon.speed) &&
    //   !attributeRestriction(pokemon.height) &&
    //   !attributeRestriction(pokemon.weight)
    // ) {
    //   alert("invalid number");
    // }
    else {
      axios.post("http://localhost:3001/pokemons", pokemon);
      setPokemon(pokemonDefault);
      dispatch(getPokemon);
      setErr({ ...err, errName: "" });
      setErr({ ...err, errName: "" });
      alert("successfully created Pokémon");
    }
  };

  const handleChange = (e) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });

    !(allNamePokemons.includes(pokemon.name) || !pokemon.name.length) &&
      setErr({ ...err, errName: "" });

    if (pokemon.image.length === 0 || imageValidation(pokemon.image)) {
      setErr({ ...err, errImage: "" });
    }
  };

  return (
    <div className={styles.create}>
      <NavBar currentPath="create" />
      <form onSubmit={handleSubmit} className={styles.form} autocomplete="off">
        <div className={styles.attribute}>
          <WeightAndHeight pokemon={pokemon} handleChange={handleChange} />
          <NameAndImageInput
            pokemon={pokemon}
            handleChange={handleChange}
            errName={err.errName}
            errImage={err.errImage}
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
