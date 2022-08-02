import React from "react";
import style from "../styles/attributeInput.module.css";

export default function Stats({ pokemon, handleChange }) {
  return (
    <div className={style.stats}>
      <div className={style.hp}>
        <label>Health Points(HP): </label>
        <input
          type="range"
          name="hp"
          value={pokemon.hp}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>{pokemon.hp}</label>
      </div>

      <div className={style.ap}>
        <label>Attack Power(AP): </label>
        <input
          type="range"
          name="attack"
          value={pokemon.attack}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>{pokemon.strength}</label>
      </div>

      <div className={style.defense}>
        <label>Defense: </label>
        <input
          type="range"
          name="defense"
          value={pokemon.defense}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>{pokemon.defense}</label>
      </div>

      <div className={style.speed}>
        <label>Speed: </label>
        <input
          type="range"
          name="speed"
          value={pokemon.speed}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>{pokemon.speed}</label>
      </div>
    </div>
  );
}

//Por ahora no funciona, revisar mas adelante
// import InputBox from "../components/inputBox.jsx";
// let pokemonItemKeys = Object.keys(pokemon);

// {pokemonItemKeys?.map((key) =>
//   key !== "name" || key !== "image" || key !== "typesId" ? (
//     <InputBox
//       object={pokemon}
//       key={key}
//       changeFunction={handleChange}
//       error=""
//     />
//   ) : (
//     <div></div>
//   )
// )}
