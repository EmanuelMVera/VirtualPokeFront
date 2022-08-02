import React from "react";
import styles from "../styles/paginated.module.css";
import { changePage } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Paginated() {
  let pokemons = useSelector((state) => state.filteredPokemons);
  let dispatch = useDispatch();

  let cantPages = pokemons.length / 12;

  const handlechangePage = (index) => {
    dispatch(changePage(index));
  };

  let pages = [];
  for (let i = 0; i < cantPages; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.paginado}>
      <button className={styles.button}>previous</button>
      {pages.map((pag, indice) => {
        return (
          <button
            className={styles.button}
            onClick={() => handlechangePage(indice)}
            key={indice}
          >
            {pag}
          </button>
        );
      })}
      <button className={styles.button}>next</button>
    </div>
  );
}
