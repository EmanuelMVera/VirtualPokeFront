import React from "react";
import { Link } from "react-router-dom";

export default function DirectionButton({ nextPath, nameNextPath, functionPath }) {
  return (
    <Link
      to={`/${nextPath}`}
      onClick={functionPath}
      className="text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 py-2 px-4 rounded-xl transition-colors duration-200 text-sm font-medium"
    >
      {nameNextPath}
    </Link>
  );
}
