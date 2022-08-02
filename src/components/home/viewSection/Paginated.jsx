import React from "react";
import styles from "../styles/paginated.module.css";
import { changePage } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";

export default function Paginated({ pokemons }) {
  let page = useSelector((state) => state.page);
  let dispatch = useDispatch();

  let cantPages = pokemons.length / 12;

  const handlechangePage = (index) => {
    dispatch(changePage(index));
  };
  const handlechangePagePrevius = () => {
    page > 0 && dispatch(changePage(page - 1));
  };
  const handlechangePageNext = () => {
    page < cantPages - 1 && dispatch(changePage(page + 1));
  };

  let pages = [];
  for (let i = 0; i < cantPages; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.paginado}>
      <button
        className={styles.buttonPageOff}
        onClick={() => handlechangePagePrevius()}
      >
        previous
      </button>
      {pages.map((pag, indice) => {
        return (
          (page===pag)?
          (<button
            className={styles.buttonPageOn}
            onClick={() => handlechangePage(indice)}
            key={indice}
          >
            {pag+1}
          </button>):
          (
            <button
            className={styles.buttonPageOff}
            onClick={() => handlechangePage(indice)}
            key={indice}
          >
            {pag+1}
          </button>
          )
        );
      })}
      <button className={styles.buttonPageOff} onClick={() => handlechangePageNext()}>
        next
      </button>
    </div>
  );
}
