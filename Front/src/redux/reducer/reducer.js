import {
  EXAMPLE,
  GET_USERS,
  GET_INVENTORY,
  SET_LOADING,
  CREATE_USER,
  CREATE_PRODUCT,
  FILTER_PRODUCTS_BY_NAME,
  RESET_DISPLAYED_PRODUCTS,
} from "../actions-types/action-types";

const initialState = {
  users: [],
  inventory: [],
  displayInventory: [],
  anyData: ["valueExample1", "valueExample2"],
  isLoading: false,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case EXAMPLE:
      return {
        ...state,
      };
    case GET_USERS:
      return { ...state, users: payload };
    case GET_INVENTORY:
      return { ...state, inventory: payload, displayInventory: payload };
    case CREATE_USER:
      return { ...state, users: [...state.users, payload] };
    case CREATE_PRODUCT:
      return { ...state, inventory: [...state.inventory, payload] };
    case FILTER_PRODUCTS_BY_NAME:
      const filteredInventory = state.inventory.filter((product) =>
        product.article_name.toLowerCase().includes(payload.toLowerCase())
      );
      return { ...state, displayInventory: filteredInventory };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    case RESET_DISPLAYED_PRODUCTS:
      return { ...state, displayInventory: [...state.inventory] };
    default:
      return { ...state };
  }
}
