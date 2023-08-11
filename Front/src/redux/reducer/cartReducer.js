/* eslint-disable no-case-declarations */
import {
  GET_CART,
  MERGE_CARTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  DELETE_ALL_PRODUCT,
  CLEAR_CART,
  GET_LOCAL_CART,
  SET_LOCAL_CART,
} from '../actions-types/cartTypes';

const initialState = {
  id: null,
  products: [],
  total: 0,
  localCart: [],
};

const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_CART:
      return {
        ...state,
        id: payload.idCar,
        products: payload.Inventarios,
        total: payload.total,
      };
    case ADD_PRODUCT:
    case MERGE_CARTS:
    case DELETE_PRODUCT:
    case DELETE_ALL_PRODUCT:
      return {
        ...state,
        products: payload.Inventarios,
        total: payload.total,
      };
    case CLEAR_CART:
      return {
        ...state,
        id: null,
        products: [],
        total: 0,
        localCart: [],
      };
    case GET_LOCAL_CART:
      const cart = localStorage.getItem('localCart');
      return {...state, localCart: cart ? JSON.parse(cart) : []};
    case SET_LOCAL_CART:
      localStorage.setItem('localCart', JSON.stringify(payload));
      return {
        ...state,
        localCart: payload,
      };
    default:
      return {...state};
  }
};

export default cartReducer;
