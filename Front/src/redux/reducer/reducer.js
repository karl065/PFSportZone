/* eslint-disable no-case-declarations */
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
  GET_SPORTS,
  ORDER_PRODUCTS_BY_PRICE,
  FILTER_PRODUCTS_BY_STATUS,
  PRODUCTS_FILTERED,
} from "../actions-types/action-types";

const initialState = {
  users: [],
  inventory: [],
  category: [],
  sports: [],
  displayInventory: [],
  product: {},
  isLoading: false,
};

export default function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USERS:
      return { ...state, users: payload };
    case GET_INVENTORY:
      return { ...state, inventory: payload, displayInventory: payload };
    case GET_CATEGORY:
      return { ...state, category: payload };
    case GET_SPORTS:
      return { ...state, sports: payload };
    case CREATE_USER:
      return { ...state, users: [...state.users, payload] };
    case CREATE_PRODUCT:
      return {
        ...state,
        inventory: [...state.inventory, payload],
        displayInventory: [...state.displayInventory, payload],
      };
    case CREATE_CATEGORY:
      return { ...state, category: [...state.category, payload] };
    case GET_PRODUCT_ID:
      return { ...state, product: payload };
    case FILTER_PRODUCTS_BY_NAME:
      const filteredInventory = state.inventory.filter((product) =>
        product.article_name.toLowerCase().includes(payload.toLowerCase())
      );
      return { ...state, displayInventory: filteredInventory };
    case ORDER_PRODUCTS_BY_PRICE:
      let inventoryOrdered = [];
      inventoryOrdered =
        payload === "menor_precio_a_mayor_precio"
          ? [...state.inventory].sort(
              (a, b) => a.selling_price - b.selling_price
            )
          : [...state.inventory].sort(
              (a, b) => b.selling_price - a.selling_price
            );
      return {
        ...state,
        displayInventory: inventoryOrdered,
      };
    case FILTER_PRODUCTS_BY_STATUS:
      return {
        ...state,
        displayInventory: payload,
      };
    case PRODUCTS_FILTERED:
      return {
        ...state,
        displayInventory:payload
      }
    case SET_LOADING:
      return { ...state, isLoading: payload };
    case RESET_DISPLAYED_PRODUCTS:
      return { ...state, displayInventory: [...state.inventory] };
    default:
      return { ...state };
  }
}
