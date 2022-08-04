import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./styles/create.module.css";
import styleButton from "../globalStyles/buttonsStyle.module.css";

import TypeSelection from "./components/TypeSelection";
import NameAndImageInput from "./components/NameAndImageInput";
import NavBar from "../globalComponent/navBar";
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
  let pokemons = useSelector((state) => state.filteredPokemons);
  const [pokemon, setPokemon] = useState(pokemonDefault);
  const [err, setErr] = useState({ errName: false, errImage: false });

  //buscar
  const validateName = (name) => {
    let pokemon = pokemons.filter((poke) => (poke.name = name));
    return pokemon.length > 0;
  };
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
      !validateName(pokemon.name) ||
      !((pokemon.name.length > 0) /*|| /\s/.test(pokemon.name)*/)
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

      setErr({ ...err, errName: false });
      setErr({ ...err, errImage: false });
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
      e.target.name === "image" &&
      e.target.value === "" &&
      setErr({ ...err, errImage: false });

    console.log("errName: " + err.errName);
    console.log("errImage: " + err.errImage);
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
