import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetStatePokemonByName } from "../../../redux/actions";
import style from "../styles/cardPokemon.module.css";
import styleButton from "../../globalStyles/buttonsStyle.module.css";

export default function CardPokemon() {
  let pokemon = useSelector((state) => state.pokemonByName);
  console.log(pokemon);
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(resetStatePokemonByName());
  };

  return (
    <div className={style.conteiner}>
      <div className={style.card}>
        <div className={style.close}>
          <button onClick={reset}>X</button>
        </div>

        {pokemon.name === "err" ? (
          <div className={style.pokemon}>
            <span className={style.err}>Pokemon no encontrado</span>
          </div>
        ) : (
          <div className={style.pokemon}>
            <img src={pokemon.image} alt="imagen del pokemon" />

            <div className={style.cardDescription}>
              <span>{pokemon.name}</span>

              {pokemon.types.map((type, index) => (
                <div key={index} className={`${styleButton[type]}`}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
