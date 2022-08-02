import { React } from "react";
import PokemonsAllCards from "./PokemonsAllCards";
import styles from "../styles/viewSection.module.css";
import { useSelector } from "react-redux";
import CardPokemon from "./CardPokemon";

export default function ViewSection() {
  let pokemonByName = useSelector((state) => state.pokemonByName);
  return (
    <div className={styles.viewSection}>
      {pokemonByName.length > 0 ? (
        <CardPokemon />
      ) : (
        <>
          <PokemonsAllCards />
        </>
      )}
    </div>
  );
}
