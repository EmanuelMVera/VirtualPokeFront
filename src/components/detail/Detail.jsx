import React from "react";
import { useSelector } from "react-redux";

import styles from "./styles/detail.module.css";
import styleButton from "../globalStyles/buttonsStyle.module.css";
import NavBar from "../globalComponent/navBar";

export default function Detail() {
  const pokemon = useSelector((state) => state.pokemonDetail);

  return (
    <div className={styles.container}>
      <NavBar direction="home" labelDirection="BACK TO HOME" />
      <div className={styles.sectionDetail}>
        <div className={styles.cardBorder}>
          <div className={styles.card}>
            <div className={styles.weightAndHeight}>
              <div> {"Weight: " + pokemon.weight + "lbs"}</div>
              <div>{"Height: " + pokemon.height + "in"}</div>
            </div>

            <div className={styles.detailCenter}>
              <div className={styles.name}>{pokemon.name}</div>
              <img src={pokemon.image} alt="" />
              <div className={styles.id}>{"ID " + pokemon.id}</div>

              <div className={styles.boxTypes}>
                {pokemon.types?.map((type, index) => (
                  <div
                    key={index}
                    className={`${styleButton[type]} ${styleButton["typeButtonDetail"]}`}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.atributtes}>
              <div>{"Health Points(HP): " + pokemon.hp}</div>
              <div>{"Attack Power(AP): " + pokemon.strength}</div>
              <div>{"Defense: " + pokemon.defense}</div>
              <div>{"Speed: " + pokemon.speed}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
