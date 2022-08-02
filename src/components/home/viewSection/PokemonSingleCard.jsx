import React from "react";
import styles from "../styles/pokemonSingleCard.module.css";
import styleButton from "../../globalStyles/buttonsStyle.module.css";
import { Link } from "react-router-dom";

export default function PokemonSingleCard({ pokemon }) {
  return (
    <Link to={`/detail/${pokemon.id}`} className={styles.card}>
      <img
        src={pokemon.image}
        alt="imagen del pokemon"
        className={styles.pokemon}
      />
      <div className={styles.cardDescription}>
        <span>{pokemon.name}</span>
        <div>
          {pokemon.types.map((type, index) => (
            <div
              key={index}
              className={`${styleButton[type]} ${styleButton["typeButtonHome"]}`}
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
