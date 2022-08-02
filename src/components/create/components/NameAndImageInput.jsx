import React from "react";
import silueta from "./silueta.png";
import styles from "../styles/nameAndImageInput.module.css";

export default function NameAndImageInput({ pokemon, handleChange }) {
  return (
    <div className={styles.nameAndImageInput}>
      <input
        type="text"
        placeholder="Name..."
        name="name"
        value={pokemon.name}
        onChange={handleChange}
      />
      <img src={pokemon.image || silueta} alt="pokemon" />
      <input
        type="text"
        placeholder="Image..."
        name="image"
        value={pokemon.image}
        onChange={handleChange}
      />
    </div>
  );
}
