import React from "react";
import { Link } from "react-router-dom";
import style from "./intro.module.css";

export default function Intro() {
  return (
    <div className={style.intro}>
      <div className={style.description}>
        <h1>Proyecto Individual Pokemon</h1>
        <p>
          Demo donde se podra ver, buscar y crear <br />
          pokemones usando la api externa pokeapi.co <br />
          creador: Emanuel M Vera
        </p>
      </div>
      <Link to={`/home`} className={style.button}>
        <button>Comenzar</button>
      </Link>
    </div>
  );
}
