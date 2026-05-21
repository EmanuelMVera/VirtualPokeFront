import React from "react";
import { useDispatch } from "react-redux";
import { setFilterOrderBy } from "../../../redux/slices/pokemonSlice";

export default function OrderBy() {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <label className="text-gray-400 text-sm font-medium whitespace-nowrap">Sort:</label>
      <select
        onChange={(e) => dispatch(setFilterOrderBy(e.target.value))}
        className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-green-500 cursor-pointer"
      >
        <option value="default">Default</option>
        <option value="ascendingAlphabet">A → Z</option>
        <option value="descendingAlphabet">Z → A</option>
        <option value="ascendingAtack">Highest Power</option>
        <option value="descendingAtack">Lowest Power</option>
      </select>
    </div>
  );
}
