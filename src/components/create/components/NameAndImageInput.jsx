import React from "react";
import silueta from "./silueta.png";
import styles from "../styles/nameAndImageInput.module.css";

export default function NameAndImageInput({ pokemon, handleChange, err }) {
  let hideName = err.errName ? "show" : "hiden";
  let hideImage = err.errImage ? "show" : "hiden";

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

      <span className={styles[hideName]}>Invalid required name</span>

      <img src={pokemon.image || silueta} alt="pokemon" />
      <input
        type="text"
        placeholder="Image..."
        name="image"
        value={pokemon.image}
        onChange={handleChange}
      />
      <span className={styles[hideImage]}>invalid image format</span>
    </div>
  );
}
