import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./api/pokemonApi";
import pokemonReducer from "./slices/pokemonSlice";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default store;
