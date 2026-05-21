import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  filterCreated: "default",
  filterTypes: "default",
  filterOrderBy: "default",
  pokemonByName: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFilterCreated: (state, action) => {
      state.filterCreated = action.payload;
      state.page = 0;
    },
    setFilterTypes: (state, action) => {
      state.filterTypes = action.payload;
      state.page = 0;
    },
    setFilterOrderBy: (state, action) => {
      state.filterOrderBy = action.payload;
    },
    setPokemonByName: (state, action) => {
      state.pokemonByName = action.payload;
    },
    clearPokemonByName: (state) => {
      state.pokemonByName = null;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setPage,
  setFilterCreated,
  setFilterTypes,
  setFilterOrderBy,
  setPokemonByName,
  clearPokemonByName,
  resetFilters,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
