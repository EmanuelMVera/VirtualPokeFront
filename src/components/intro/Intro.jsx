import React from "react";
import { Link } from "react-router-dom";
import pokemon from "./pokemon.jpg";
import stylesButton from "../globalStyles/buttonsStyle.module.css";
import style from "./intro.module.css";

export default function Intro() {
  return (
    <div className={style.container}>
      <img src={pokemon} alt="" />
      <Link
        to={`/home`}
        className={`${stylesButton.buttonLink} ${style.button}`}
      >
        <button>Home</button>
      </Link>
    </div>
  );
}
