import React from "react";
import FilteredByCreated from "./FilteredByCreated";
import FilteredByTypes from "./FilteredByTypes";
import OrderBy from "./OrderBy";

export default function AsideSection() {
  return (
    <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex flex-wrap items-center gap-4">
      <FilteredByCreated />
      <OrderBy />
      <FilteredByTypes />
    </div>
  );
}
