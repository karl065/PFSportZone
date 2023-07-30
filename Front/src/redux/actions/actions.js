import {
  SET_LOADING,
  GET_USERS,
  GET_INVENTORY,
  GET_SPORTS,
  CREATE_USER,
  CREATE_PRODUCT,
  GET_PRODUCT_ID,
  FILTER_PRODUCTS_BY_NAME,
  RESET_DISPLAYED_PRODUCTS,
  GET_CATEGORY,
  CREATE_CATEGORY,
  ORDER_PRODUCTS_BY_PRICE,
  FILTER_PRODUCTS_BY_STATUS,
  PRODUCTS_FILTERED,
  ORDER_PRODUCTS_BY_ABC,
  FILTER_USERS_BY_ROLE_AND_STATUS,
  CREATE_MARCA,
  CREATE_DEPORTE,
  GET_MARCA,
  ACCESS,
  NOT_ACCESS,
} from "../actions-types/action-types";
import server from "../../Connections/Server";
import axios from "axios";

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

export const getCategory = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${server.api.baseURL}category`);
    dispatch({
      type: GET_CATEGORY,
      payload: data,
    });
  };
};

export const getSports = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${server.api.baseURL}deporte`);
    dispatch({
      type: GET_SPORTS,
      payload: data,
    });
  };
};

export const getMarca = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${server.api.baseURL}marca`);
    dispatch({
      type: GET_MARCA,
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

export const createCategory = (category) => {
  return async (dispatch) => {
    const { data } = await axios.post(
      `${server.api.baseURL}category`,
      category
    );
    dispatch({
      type: CREATE_CATEGORY,
      payload: data,
    });
  };
};

export const createMarca = (marca) => {
  return async (dispatch) => {
    const { data } = await axios.post(`${server.api.baseURL}marca`, marca);
    dispatch({
      type: CREATE_MARCA,
      payload: data,
    });
  };
};
export const createDeporte = (deporte) => {
  return async (dispatch) => {
    const { data } = await axios.post(`${server.api.baseURL}deporte`, deporte);
    dispatch({
      type: CREATE_DEPORTE,
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
    const { data } = await axios.get(`${server.api.baseURL}inventory/${id}`);
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

export const orderProductsByPrice = (order) => {
  return {
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: order,
  };
};

export const orderProductsByAbc = (order) => {
  return {
    type: ORDER_PRODUCTS_BY_ABC,
    payload: order,
  };
};

export const filterProductsByStatus = (status) => {
  return {
    type: FILTER_PRODUCTS_BY_STATUS,
    payload: status,
  };
};

export const productsFiltered = (products) => {
  return {
    type: PRODUCTS_FILTERED,
    payload: products,
  };
};

export const filterUsersByRoleAndStatus = (role, status) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `${server.api.baseURL}filters?role=${role}&userStatus=${status}`
    );
    dispatch({
      type: FILTER_USERS_BY_ROLE_AND_STATUS,
      payload: data,
    });
  };
};

export function access() {
  return {
    type: ACCESS,
  };
}

export function notAccess() {
  return {
    type: NOT_ACCESS,
  };
}
