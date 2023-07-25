import { ADD_PRODUCT } from "../actions-types/cartTypes";
import axios from "axios";
import server from "../../Connections/Server";

export const addProduct = (idProduct) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${server.api.baseURL}inventory/${idProduct}`);
    dispatch({
      type: ADD_PRODUCT,
      payload: data,
    });
  };
};
