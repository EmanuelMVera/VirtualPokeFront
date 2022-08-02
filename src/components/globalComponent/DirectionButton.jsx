import React from "react";
import { Link } from "react-router-dom";

import stylesButton from "../globalStyles/buttonsStyle.module.css";

export default function DirectionButton({
  nextPath,
  nameNextPath,
  functionPath,
}) {
  return (
    <Link to={`/${nextPath}`} className={stylesButton.buttonLink}>
      <button onClick={functionPath}>{nameNextPath}</button>
    </Link>
  );
}
