import { React } from "react";
import styles from "../globalStyles/searchBar.module.css";
import styleButton from "../globalStyles/buttonsStyle.module.css";
import { getPokemonByName } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const [pokemonName, setPokemonName] = useState("");
  const dispatch = useDispatch();
  console.log(pokemonName);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(pokemonName));
  };

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.textBox}
          type="text"
          placeholder="Pokémon..."
          onChange={handleChange}
        />
        <input className={styleButton.submit} type="submit" value="Buscar" />
      </form>
    </div>
  );
}
