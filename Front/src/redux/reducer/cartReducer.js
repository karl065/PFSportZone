import { ADD_PRODUCT } from "../actions-types/cartTypes";

const initialState = {
  products: [],
  total_amount: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, payload] };
    default:
      return { ...state };
  }
};

export default cartReducer;
