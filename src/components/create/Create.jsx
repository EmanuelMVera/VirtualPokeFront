import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import styles from "./styles/create.module.css";
import styleButton from "../globalStyles/buttonsStyle.module.css";

import TypeSelection from "./components/TypeSelection";
import NameAndImageInput from "./components/NameAndImageInput";
import NavBar from "../globalComponent/navBar";
import { getPokemon, getPokemonByName } from "../../redux/actions";
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
  const [err, setErr] = useState({ errName: false, errImage: false });

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

    if (
      dispatch(getPokemonByName(pokemon.name === "err")) ||
      !(pokemon.name.length > 0 || /\s/.test(pokemon.name))
    ) {
      setErr({ ...err, errName: true });
    } else if (!imageValidation(pokemon.image)) {
      setErr({ ...err, errImage: true });
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
      setErr({ ...err, errName: true });
      setErr({ ...err, errName: true });
      alert("successfully created Pokémon");
    }
  };

  const handleChange = (e) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });

    e.target.name === "name" &&
      (e.target.name === "name" && e.target.value !== ""
        ? setErr({ ...err, errName: false })
        : setErr({ ...err, errName: true }));

    e.target.name === "image" &&
      (e.target.name === "image" && e.target.value === ""
        ? setErr({ ...err, errImage: false })
        : setErr({ ...err, errImage: true }));

    console.log("errName: " + err.errName);
    console.log("errImage: " + err.errImage);
  };

  return (
    <div className={styles.create}>
      <NavBar currentPath="create" />
      <form onSubmit={handleSubmit} className={styles.form} >
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
