import {
  EXAMPLE,
  GET_INVENTORY,
  SET_LOADING,
} from "../actions-types/action-types";

const initialState = {
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
    case GET_INVENTORY:
      return { ...state, inventory: payload };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return { ...state };
  }
}
