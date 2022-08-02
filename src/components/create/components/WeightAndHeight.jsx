import React from "react";
import style from "../styles/attributeInput.module.css";

export default function WeightAndHeight({ pokemon, handleChange }) {
  return (
    <div className={style.weightAndHeight}>
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
