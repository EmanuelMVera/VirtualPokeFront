import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../redux/slices/pokemonSlice";

const ITEMS_PER_PAGE = 12;

export default function Paginated({ totalCount }) {
  const page = useSelector((state) => state.pokemon.page);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <div className="flex items-center justify-center gap-2 py-4 px-4 flex-wrap">
      <button
        onClick={() => dispatch(setPage(Math.max(0, page - 1)))}
        disabled={page === 0}
        className="px-3 py-1.5 rounded-lg border border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
      >
        ← Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => dispatch(setPage(p))}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            page === p
              ? "bg-green-500 text-white border border-green-500"
              : "border border-gray-700 text-gray-400 hover:border-gray-500"
          }`}
        >
          {p + 1}
        </button>
      ))}
      <button
        onClick={() => dispatch(setPage(Math.min(totalPages - 1, page + 1)))}
        disabled={page >= totalPages - 1}
        className="px-3 py-1.5 rounded-lg border border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm"
      >
        Next →
      </button>
    </div>
  );
}
