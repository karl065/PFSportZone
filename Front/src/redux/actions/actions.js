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
  FILTER_USERS_BY_ROLE_AND_STATUS,
  //FILTER_USERS_BY_STATUS,
} from '../actions-types/action-types';
import server from '../../Connections/Server';
import axios from 'axios';

export const getUsers = () => {
  return async (dispatch) => {
    const {data} = await axios.get(`${server.api.baseURL}users`);
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  };
};

export const getInventory = () => {
  return async (dispatch) => {
    const {data} = await axios.get(`${server.api.baseURL}inventory`);
    dispatch({
      type: GET_INVENTORY,
      payload: data,
    });
  };
};

export const getCategory = () => {
  return async (dispatch) => {
    const {data} = await axios.get(`${server.api.baseURL}category`);
    dispatch({
      type: GET_CATEGORY,
      payload: data,
    });
  };
};

export const getSports = () => {
  return async (dispatch) => {
    const {data} = await axios.get(`${server.api.baseURL}deporte`);
    dispatch({
      type: GET_SPORTS,
      payload: data,
    });
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    const {data} = await axios.post(`${server.api.baseURL}users`, user);
    dispatch({
      type: CREATE_USER,
      payload: data,
    });
  };
};

export const createProduct = (product) => {
  return async (dispatch) => {
    const {data} = await axios.post(`${server.api.baseURL}inventory`, product);
    dispatch({
      type: CREATE_PRODUCT,
      payload: data,
    });
  };
};

export const createCategory = (category) => {
  return async (dispatch) => {
    const {data} = await axios.post(`${server.api.baseURL}category`, category);
    dispatch({
      type: CREATE_CATEGORY,
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
    const {data} = await axios.get(`${server.api.baseURL}inventory/${id}`);
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

export const filterProductsByStatus = (status) => {
  return {
    type: FILTER_PRODUCTS_BY_STATUS,
    payload: status,
  };
};

export const filterUsersByRoleAndStatus = (role,status) => {
  return async (dispatch) => {
    const {data} = await axios.get(`${server.api.baseURL}filters?role=${role}&userStatus=${status}`);
    dispatch({
      type: FILTER_USERS_BY_ROLE_AND_STATUS,
      payload: data,
    });
  };
};
