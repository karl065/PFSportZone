import {
  EXAMPLE,
  SET_LOADING,
  GET_USERS,
  GET_INVENTORY,
  CREATE_USER,
  CREATE_PRODUCT,
  GET_PRODUCT_ID,
  FILTER_PRODUCTS_BY_NAME,
  RESET_DISPLAYED_PRODUCTS,
} from "../actions-types/action-types";
import server from "../../Connections/Server";
import axios from "axios";

export function example(value) {
  return {
    type: EXAMPLE,
    payload: value,
  };
}

export const getUsers = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${server.api.baseURL}users`);
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  };
};

export const getInventory = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${server.api.baseURL}inventory`);
    dispatch({
      type: GET_INVENTORY,
      payload: data,
    });
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post(`${server.api.baseURL}users`, user);
    dispatch({
      type: CREATE_USER,
      payload: data,
    });
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      `${server.api.baseURL}inventory`,
      product
    );
    dispatch({
      type: CREATE_PRODUCT,
      payload: data,
    });
  };
};

export const filterProductsByName = (name) => {
  return {
    type: FILTER_PRODUCTS_BY_NAME,
    payload: name,
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    console.log("Entro a get by id");
    const { data } = await axios.get(`${server.api.baseURL}inventory/${id}`);

    console.log("En data llego", data);

    dispatch({
      type: GET_PRODUCT_ID,
      payload: data,
    });
  };
};

export const resetDisplayedProducts = () => {
  return {
    type: RESET_DISPLAYED_PRODUCTS,
  };
};

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};
