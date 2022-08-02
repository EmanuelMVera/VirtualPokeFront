import React from "react";
import SearchBar from "./SearchBar";
import DirectionButton from "./DirectionButton";

import stylesNav from "../globalStyles/navBarStyles.module.css";

export default function NavBar({ direction, labelDirection }) {
  return (
    <div className={stylesNav.navBar}>
      {direction === "create" ? <SearchBar /> : <></>}
      <DirectionButton direction={direction} labelDirection={labelDirection} />
    </div>
  );
}
