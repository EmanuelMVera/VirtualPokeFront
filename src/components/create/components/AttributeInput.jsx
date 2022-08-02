import React from "react";
import style from "../styles/attributeInput.module.css";

export default function AttributeInput({ pokemon, handleChange }) {
  return (
    <div className={style.attributeInput}>
      <div>
        <label>HP: </label>
        <input
          type="number"
          name="hp"
          value={pokemon.hp}
          min="0"
          max="100"
          pattern="^[0-9]+"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Attack: </label>
        <input
          type="number"
          name="strength"
          value={pokemon.strength}
          min="0"
          max="100"
          pattern="^[0-9]+"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Defense: </label>
        <input
          type="number"
          name="defense"
          value={pokemon.defense}
          min="0"
          max="100"
          pattern="^[0-9]+"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Speed: </label>
        <input
          type="number"
          name="speed"
          value={pokemon.speed}
          min="0"
          max="100"
          pattern="^[0-9]+"
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Height: </label>
        <input
          type="number"
          name="height"
          value={pokemon.height}
          min="0"
          max="100"
          pattern="^[0-9]+"
          onChange={handleChange}
        />
        <label>in</label>
      </div>

      <div>
        <label>Weight:</label>
        <input
          type="number"
          name="weight"
          value={pokemon.weight}
          min="0"
          max="100"
          pattern="^[0-9]+"
          onChange={handleChange}
        />
        <label>lbs</label>
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
