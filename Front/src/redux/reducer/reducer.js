import {
  EXAMPLE,
  GET_USERS,
  GET_INVENTORY,
  SET_LOADING,
  CREATE_USER,
  CREATE_PRODUCT,
} from "../actions-types/action-types";

const initialState = {
  users: [],
  inventory: [],
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
      return { ...state, inventory: payload };
    case CREATE_USER:
      return { ...state, users: [...state.users, payload] };
    case CREATE_PRODUCT:
      return { ...state, inventory: [...state.inventory, payload] };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return { ...state };
  }
}
