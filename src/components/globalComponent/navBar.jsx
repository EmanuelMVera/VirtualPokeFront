import React from "react";
import SearchBar from "./SearchBar";
import DirectionButton from "./DirectionButton";

import stylesNav from "../globalStyles/navBarStyles.module.css";

export default function NavBar({ currentPath, functionPath }) {
  return (
    <div className={stylesNav.navBar}>
      {/* PATH HOME */}
      {currentPath === "home" && (
        <>
          <SearchBar />
          <DirectionButton
            nextPath="create"
            nameNextPath="CREATE POKÉMON"
          />
        </>
      )}

      {/* PATH HOME */}
      {currentPath === "create" && (
        <DirectionButton
          nextPath="home"
          nameNextPath="BACK TO HOME"
        />
      )}

      {/* PATH DETAIL */}
      {currentPath === "detail" && (
        <DirectionButton
          nextPath="home"
          nameNextPath="BACK TO HOME"
          functionPath={functionPath}
        />
      )}
    </div>
  );
}

//Luego modular
// { currentPath, nextPath, nameNextPath, functionPath }
// <DirectionButton
//         direction={nextPath}
//         labelDirection={nameNextPath}
//         functionClick={functionPath}
//       />
