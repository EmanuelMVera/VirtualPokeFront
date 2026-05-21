import React, { useState } from "react";

import TypeSelection from "./components/TypeSelection";
import NameAndImageInput from "./components/NameAndImageInput";
import NavBar from "../globalComponent/navBar";
import Stats from "./components/Stats";
import WeightAndHeight from "./components/WeightAndHeight";

import { useCreatePokemonMutation } from "../../redux/api/pokemonApi";
import { formValidation } from "../../middlewares/formValidation";

const pokemonDefault = {
  name: "",
  image: "",
  hp: 0,
  strength: 0,
  defense: 0,
  speed: 0,
  height: 0,
  weight: 0,
  typesId: [],
};

export default function Create() {
  const [pokemon, setPokemon] = useState(pokemonDefault);
  const [err, setErr] = useState({ name: "", image: "", attribute: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [createPokemon, { isLoading }] = useCreatePokemonMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const validationErrors = formValidation(pokemon, {});
    if (Object.keys(validationErrors).length) {
      return setErr(validationErrors);
    }

    try {
      await createPokemon(pokemon).unwrap();
      setPokemon(pokemonDefault);
      setErr({ name: "", image: "", attribute: "" });
      setSuccessMessage("Pokémon created successfully! 🎉");
    } catch (error) {
      const serverError =
        error?.data?.error ||
        error?.data?.errors?.name?.[0] ||
        "Failed to create Pokémon";
      setErr((prev) => ({ ...prev, name: serverError }));
    }
  };

  const handleChange = (e) => {
    setPokemon({ ...pokemon, [e.target.name]: e.target.value });
    setSuccessMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <NavBar currentPath="create" />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-black text-white mb-8">
          Create a <span className="text-green-400">Pokémon</span>
        </h1>

        <form onSubmit={handleSubmit}>
          {successMessage && (
            <div className="bg-green-900/50 text-green-300 border border-green-700 rounded-xl px-4 py-3 mb-6 text-sm">
              {successMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-4">Identity</h2>
              <NameAndImageInput
                pokemon={pokemon}
                handleChange={handleChange}
                err={err}
              />
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-4">Stats</h2>
              <Stats pokemon={pokemon} handleChange={handleChange} />
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-4">Physical</h2>
              <WeightAndHeight pokemon={pokemon} handleChange={handleChange} />
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-6">
            <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-1">Types</h2>
            <TypeSelection pokemon={pokemon} setPokemon={setPokemon} />
          </div>

          {err.attribute && (
            <p className="text-red-400 text-sm mb-4">{err.attribute}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-400 disabled:bg-gray-700 text-white font-bold py-4 rounded-2xl transition-colors duration-200 text-lg"
          >
            {isLoading ? "Creating..." : "CREATE POKÉMON"}
          </button>
        </form>
      </div>
    </div>
  );
}
