import React from "react";
import silueta from "./silueta.png";
import styles from "../styles/nameAndImageInput.module.css";

export default function NameAndImageInput({ pokemon, handleChange, err }) {
  let hideName = err.name ? "show" : "hiden";
  let hideImage = err.image ? "show" : "hiden";
  err.attribute && alert(err.attribute);

  return (
    <div className={styles.nameAndImageInput}>
      <input
        type="text"
        placeholder="Name..."
        name="name"
        autoComplete="off"
        value={pokemon.name}
        onChange={handleChange}
      />

      <span className={styles[hideName]}>{err.name}</span>

      <img src={pokemon.image || silueta} alt="pokemon" />
      <input
        type="text"
        placeholder="Image..."
        name="image"
        value={pokemon.image}
        onChange={handleChange}
      />
      <span className={styles[hideImage]}>{err.image}</span>
    </div>
  );
}
