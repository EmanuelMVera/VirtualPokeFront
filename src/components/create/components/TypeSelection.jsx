import { useSelector } from "react-redux";
import React from "react";
import style from "../styles/typeSelection.module.css";
import styleButton from "../../globalStyles/buttonsStyle.module.css";

export default function TypeSelection({ pokemon, setPokemon }) {
  const types = useSelector((state) => state.types);

  const handleOnChange = (id) => {
    !pokemon.typesId.includes(id) && pokemon.typesId.length < 2
      ? setPokemon({ ...pokemon, typesId: [...pokemon.typesId, id] })
      : setPokemon({
          ...pokemon,
          typesId: pokemon.typesId.filter((i) => i !== id),
        });
  };

  return (
    <div className={style.typeSelection}>
      {types?.map(({ id, name }) =>
        pokemon.typesId.includes(id) ? (
          <input
            className={`${styleButton[name]} ${styleButton.typeButtonActive}`}
            key={id}
            type="button"
            id={id}
            name={name}
            value={name}
            onClick={() => handleOnChange(id)}
          />
        ) : (
          <input
            className={`${styleButton[name]} ${styleButton.typeButtonFalse}`}
            key={id}
            type="button"
            id={id}
            name={name}
            value={name}
            onClick={() => handleOnChange(id)}
          />
        )
      )}
      <div className={styleButton.dot}></div>
    </div>
  );
}
