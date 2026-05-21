import axios from "axios";
export const GET_POKEMONS = "Get_Pokemons";
export const POST_POKEMON = "Post_Pokemon";
export const GET_POKEMON_BY_NAME = "Get_Pokemon_By_Name";
export const GET_TYPES = "Get_types";
export const FILTERED_BY_CREATED = "Filtered_By_Created";
export const FILTERED_BY_TYPE = "Filtered_By_Type";
export const SORT_BY = "Sort_By";
export const CHANGE_PAGE = "Change_Page";
export const GET_POKEMON_BY_ID = "Get_Pokemon_By_Id";
export const RESET_STATE_POKEMON_BY_NAME = "Reset_State_Pokemon_By_Name";
export const RESET_DETAIL = "Reset_Detail";

const API_URL = import.meta.env.VITE_API_URL;

export function getPokemon() {
  return async function (dispatch) {
    let pedido = await axios.get(`${API_URL}/pokemons`);
    dispatch({
      type: GET_POKEMONS,
      payload: pedido.data,
    });
  };
}
export function postPokemon(pokemon) {
  return async function (dispatch) {
    await axios.post(`${API_URL}/pokemons`, pokemon);
    dispatch({
      type: POST_POKEMON,
      payload: pokemon,
    });
  };
}
export function getPokemonByName(name) {
  return async function (dispatch) {
    let pedido = await axios.get(`${API_URL}/pokemons?name=${name}`);
    dispatch({
      type: GET_POKEMON_BY_NAME,
      payload: pedido.data,
    });
  };
}
export function getPokemonById(id) {
  return async function (dispatch) {
    let pedido = await axios.get(`${API_URL}/pokemons/${id}`);
    dispatch({
      type: GET_POKEMON_BY_ID,
      payload: pedido.data,
    });
  };
}
export function getTypes() {
  return async function (dispatch) {
    let pedido = await axios.get(`${API_URL}/types`);
    dispatch({
      type: GET_TYPES,
      payload: pedido.data,
    });
  };
}

export function filteredByCreated(created) {
  return {
    type: FILTERED_BY_CREATED,
    payload: created,
  };
}
export function filteredByTypes(type) {
  return {
    type: FILTERED_BY_TYPE,
    payload: type,
  };
}
export function sortBy(orderType) {
  return {
    type: SORT_BY,
    payload: orderType,
  };
}

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    payload: page,
  };
}

export function resetStatePokemonByName() {
  return {
    type: RESET_STATE_POKEMON_BY_NAME,
    payload: "",
  };
}

export function resetDetail() {
  return {
    type: RESET_DETAIL,
    payload: "",
  };
}
