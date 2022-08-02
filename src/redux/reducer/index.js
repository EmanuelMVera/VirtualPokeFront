import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_TYPES,
  FILTERED_BY_CREATED,
  FILTERED_BY_TYPE,
  SORT_BY,
  CHANGE_PAGE,
  RESET_STATE_POKEMON_BY_NAME,
} from "../actions/index";

const initialState = {
  page: 0,
  pokemons: [],
  filteredPokemons: [],
  filterCreated: "default",
  filterTypes: "default",
  filterOrderBy: "default",
  pokemonByName: {},
  pokemonDetail: {},
  types: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filteredPokemons: action.payload,
      };
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonByName: [action.payload],
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case FILTERED_BY_CREATED:
      return {
        ...state,
        filterCreated: action.payload,
      };
    case FILTERED_BY_TYPE:
      return {
        ...state,
        filterTypes: action.payload,
      };
    case SORT_BY:
      return {
        ...state,
        filterOrderBy: action.payload,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case RESET_STATE_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonByName: {},
      };

    default:
      return state;
  }
}
