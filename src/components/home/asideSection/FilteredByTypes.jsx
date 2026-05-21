import React from "react";
import { useDispatch } from "react-redux";
import { useGetTypesQuery } from "../../../redux/api/pokemonApi";
import { setFilterTypes } from "../../../redux/slices/pokemonSlice";

export default function FilteredByTypes() {
  const dispatch = useDispatch();
  const { data: types = [] } = useGetTypesQuery();

  return (
    <div className="flex items-center gap-2">
      <label className="text-gray-400 text-sm font-medium whitespace-nowrap">Type:</label>
      <select
        onChange={(e) => dispatch(setFilterTypes(e.target.value))}
        className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-green-500 cursor-pointer"
      >
        <option value="default">All Types</option>
        {types.map((type) => (
          <option key={type.id} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
    </div>
  );
}
