import {
  GET_CART,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_CART,
} from "../actions-types/cartTypes";

const initialState = {
  id: null,
  products: [],
  total: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART:
      return {
        ...state,
        id: payload.idCar,
        products: payload.Inventarios,
        total: payload.total,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: payload.Inventarios,
        total: payload.total,
      };
    case UPDATE_CART:
      return {
        ...state,
        products: payload.Inventarios,
        total: payload.total,
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: payload.Inventarios,
        total: payload.total,
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
