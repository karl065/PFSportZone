import {
  GET_CART,
  MERGE_CARTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  DELETE_ALL_PRODUCT,
  CLEAR_CART,
  GET_LOCAL_CART,
  SET_LOCAL_CART,
} from "../actions-types/cartTypes";
import axios from "axios";
import server from "../../Connections/Server";

export const getCart = (idCart) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${server.api.baseURL}carrito/${idCart}`);

    dispatch({
      type: GET_CART,
      payload: data,
    });
  };
};

export const mergeLocalCart = (userId, localCart) => {
  return async (dispatch) => {
    const { data } = await axios.put(`${server.api.baseURL}carrito`, {
      userId,
      localCart,
    });

    dispatch({
      type: MERGE_CARTS,
      payload: data,
    });
  };
};

export const addProduct = (idCart, idProduct, quantity) => {
  return async (dispatch) => {
    const { data } = await axios.post(`${server.api.baseURL}carrito`, {
      idCar: idCart,
      id_inventory: idProduct,
      cant: quantity,
    });

    dispatch({
      type: ADD_PRODUCT,
      payload: data,
    });
  };
};

export const deleteProduct = (idCart, idProduct) => {
  return async (dispatch) => {
    const { data } = await axios.delete(
      `${server.api.baseURL}carrito/${idCart}/${idProduct}`
    );
    dispatch({
      type: DELETE_PRODUCT,
      payload: data,
    });
  };
};

export const deleteAllProduct = () => {
  const idCarrito = localStorage.getItem("idCarrito");
  return async (dispatch) => {
    const { data } = await axios.delete(
      `${server.api.baseURL}carrito/${idCarrito}`
    );
    dispatch({
      type: DELETE_ALL_PRODUCT,
      payload: data,
    });
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const getLocalCart = () => {
  return {
    type: GET_LOCAL_CART,
  };
};

export const setLocalCart = (newLocalCart) => {
  return {
    type: SET_LOCAL_CART,
    payload: newLocalCart,
  };
};
