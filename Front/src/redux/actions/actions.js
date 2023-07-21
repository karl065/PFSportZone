import {
  EXAMPLE,
  SET_LOADING,
  GET_INVENTORY,
} from "../actions-types/action-types";
import server from "../../Connections/Server";
import axios from "axios";

export function example(value) {
  return {
    type: EXAMPLE,
    payload: value,
  };
}

export const getInventory = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${server.api.baseURL}inventory`);
    dispatch({
      type: GET_INVENTORY,
      payload: data,
    });
  };
};

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};
