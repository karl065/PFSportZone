/* eslint-disable no-case-declarations */
import {
  GET_USERS,
  GET_INVENTORY,
  SET_LOADING,
  CREATE_USER,
  CREATE_PRODUCT,
  GET_PRODUCT_ID,
  FILTER_PRODUCTS_BY_NAME,
  RESET_DISPLAYED_PRODUCTS,
  GET_CATEGORY,
  CREATE_CATEGORY,
} from '../actions-types/action-types';

const initialState = {
  users: [],
  inventory: [],
  category: [],
  displayInventory: [],
  product: {},
  isLoading: false,
};

export default function reducer(state = initialState, {type, payload}) {
  switch (type) {
    case GET_USERS:
      return {...state, users: payload};
    case GET_INVENTORY:
      return {...state, inventory: payload, displayInventory: payload};
    case GET_CATEGORY:
      return {...state, category: payload};
    case CREATE_USER:
      return {...state, users: [...state.users, payload]};
    case CREATE_PRODUCT:
      return {...state, inventory: [...state.inventory, payload]};
    case CREATE_CATEGORY:
      return {...state, category: [...state.category, payload]};
    case GET_PRODUCT_ID:
      return {...state, product: payload};
    case FILTER_PRODUCTS_BY_NAME:
      const filteredInventory = state.inventory.filter((product) =>
        product.article_name.toLowerCase().includes(payload.toLowerCase())
      );
      return {...state, displayInventory: filteredInventory};
    case SET_LOADING:
      return {...state, isLoading: payload};
    case RESET_DISPLAYED_PRODUCTS:
      return {...state, displayInventory: [...state.inventory]};
    default:
      return {...state};
  }
}
