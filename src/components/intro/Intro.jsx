import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div>
      <Link to={`/home`}>
        <button>Comenzar</button>
      </Link>
    </div>
  );
}
