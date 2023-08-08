import {
  SET_LOADING,
  SET_USER,
  GET_USER,
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
  EDIT_PRODUCT,
  UPDATE_USERS_STATUS,
  UPDATE_ITEM_STATUS,
  GET_VENTAS,
} from '../actions-types/action-types';
import server from '../../Connections/Server';
import axios from 'axios';
import {handleLogout} from '../../helpers/helperLogin';
import {getCart} from './cartActions';

export const getUser = (navigate) => {
  const token = localStorage.getItem('token');
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${server.api.baseURL}auth`, {
        headers: {
          'x-auth-token': token,
        },
      });
      console.log(data);
      // if (data.carrito.idCar) {
      dispatch(getCart(data.carrito.idCar));
      // }

      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      handleLogout(navigate);
    }
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const {data} = await axios.get(`${server.api.baseURL}users`);
    data.sort((a, b) => a.idUser - b.idUser);
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

export const getMarca = () => {
  return async (dispatch) => {
    const {data} = await axios.get(`${server.api.baseURL}marca`);
    dispatch({
      type: GET_MARCA,
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
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['x-auth-token'] = token;
  }

  return async (dispatch) => {
    try {
      const {data} = await axios.post(
        `${server.api.baseURL}inventory`,
        product,
        {headers: headers}
      );

      dispatch({
        type: CREATE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
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

export const createMarca = (marca) => {
  return async (dispatch) => {
    const {data} = await axios.post(`${server.api.baseURL}marca`, marca);
    dispatch({
      type: CREATE_MARCA,
      payload: data,
    });
  };
};
export const createDeporte = (deporte) => {
  return async (dispatch) => {
    const {data} = await axios.post(`${server.api.baseURL}deporte`, deporte);
    dispatch({
      type: CREATE_DEPORTE,
      payload: data,
    });
  };
};

export const editProduct = (newValues, status) => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['x-auth-token'] = token;
  }
  return async (dispatch) => {
    const {data} = await axios.put(
      `${server.api.baseURL}inventory/${newValues.id_inventory}`,
      newValues,
      {headers: headers}
    );
    dispatch(getInventory());
    if (status) {
      dispatch(filterProductsByStatus(status));
    }
    dispatch({
      type: EDIT_PRODUCT,
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

export const orderProductsByAbc = (order) => {
  return {
    type: ORDER_PRODUCTS_BY_ABC,
    payload: order,
  };
};

export const filterProductsByStatus = (status) => {
  return async (dispatch) => {
    const {data} = await axios.get(
      `${server.api.baseURL}filters?status=${status}`
    );
    dispatch({
      type: FILTER_PRODUCTS_BY_STATUS,
      payload: data,
    });
  };
};

export const productsFiltered = (products) => {
  return {
    type: PRODUCTS_FILTERED,
    payload: products,
  };
};

export const filterUsersByRoleAndStatus = (role, userStatus) => {
  const filters = {
    role,
    userStatus,
  };
  return async (dispatch) => {
    const queryString = Object.keys(filters)
      .map((key) => {
        const value = filters[key];
        if (
          value !== undefined &&
          value !== null &&
          value !== '' &&
          value !== 'default'
        ) {
          return `${key}=${value}`;
        }
        return null; // Si el valor no es válido, se devuelve null
      })
      .filter((query) => query !== null) // Filtrar los valores nulos
      .join('&');
    const {data} = await axios.get(
      `${server.api.baseURL}filters?${queryString}`
    );
    data.sort((a, b) => a.idUser - b.idUser);
    dispatch({
      type: FILTER_USERS_BY_ROLE_AND_STATUS,
      payload: data,
    });
  };
};

export const updateItemStatus = (itemId, newStatus) => ({
  type: UPDATE_ITEM_STATUS,
  payload: {itemId, newStatus},
});
export const updateUsersStatus = (idUser, newStatus, role, userStatus) => {
  return async (dispatch) => {
    await axios.put(`${server.api.baseURL}users/${idUser}`, newStatus);
    if (role || userStatus) {
      dispatch(filterUsersByRoleAndStatus(role, userStatus));
    } else {
      const {data} = await axios.get(`${server.api.baseURL}users`);
      data.sort((a, b) => a.idUser - b.idUser);
      dispatch({
        type: UPDATE_USERS_STATUS,
        payload: data,
      });
    }
  };
};

export const getCompras = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${server.api.baseURL}ventas`);
      console.log(data);
      dispatch({
        type: GET_VENTAS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
