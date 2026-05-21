import React from "react";
import { useDispatch } from "react-redux";
import { setFilterCreated } from "../../../redux/slices/pokemonSlice";

export default function FilteredByCreated() {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <label className="text-gray-400 text-sm font-medium whitespace-nowrap">Source:</label>
      <select
        onChange={(e) => dispatch(setFilterCreated(e.target.value))}
        className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-green-500 cursor-pointer"
      >
        <option value="default">All</option>
        <option value="api">API Only</option>
        <option value="db">Created</option>
      </select>
    </div>
  );
}
