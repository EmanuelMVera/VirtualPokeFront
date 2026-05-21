import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => "/pokemons",
    }),
    getPokemonById: builder.query({
      query: (id) => `/pokemons/${id}`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `/pokemons?name=${encodeURIComponent(name)}`,
    }),
    getTypes: builder.query({
      query: () => "/types",
    }),
    createPokemon: builder.mutation({
      query: (pokemon) => ({
        url: "/pokemons",
        method: "POST",
        body: pokemon,
      }),
      invalidatesTags: ["Pokemon"],
    }),
  }),
});

export const {
  useGetPokemonsQuery,
  useGetPokemonByIdQuery,
  useLazyGetPokemonByNameQuery,
  useGetTypesQuery,
  useCreatePokemonMutation,
} = pokemonApi;
