import React from "react";
import { Link } from "react-router-dom";

import stylesButton from "../globalStyles/buttonsStyle.module.css";

export default function DirectionButton({ direction, labelDirection }) {
  return (
    <Link to={`/${direction}`} className={stylesButton.buttonLink}>
      <button>{labelDirection}</button>
    </Link>
  );
}
