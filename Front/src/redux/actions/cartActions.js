import { GET_CART, ADD_PRODUCT, DELETE_PRODUCT } from "../actions-types/cartTypes";
import axios from "axios";
import server from "../../Connections/Server";

export const getCart = (idCart) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${server.api.baseURL}carrito/${idCart}`);
    console.log("getcart data", data);
    // * Elimina el atributo usuario de la respuesta.
    delete data.usuario;
    dispatch({
      type: GET_CART,
      payload: data,
    });
  };
};

export const addProduct = (idCart, idProduct, quantity) => {
  return async (dispatch) => {
    console.log("Producto id", idProduct);
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
    const { data } = await axios.delete(`${server.api.baseURL}carrito/${idCart}/${idProduct}`);

    console.log("Carrito delete", data);
    dispatch({
      type: DELETE_PRODUCT,
      payload: data,
    })
  }
}
