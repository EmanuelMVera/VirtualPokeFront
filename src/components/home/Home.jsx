import React, { useEffect } from "react";
import styles from "./styles/home.module.css";

import AsideSection from "./asideSection/AsideSection";
import ViewSection from "./viewSection/ViewSection";
import NavBar from "../globalComponent/navBar";
import { useDispatch } from "react-redux";
import { getPokemon, getTypes } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={styles.home}>
      <NavBar direction="create" labelDirection="CREATE POKÉMON" />
      <AsideSection />
      <ViewSection className={styles.viewSection} />
    </div>
  );
}
