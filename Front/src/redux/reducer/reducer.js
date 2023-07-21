import { EXAMPLE, SET_LOADING } from "../actions-types/action-types";

const initialState = {
  anyData: ["valueExample1", "valueExample2"],
  isLoading: false,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case EXAMPLE:
      return {
        ...state,
      };
    case SET_LOADING:
      return { ...state, isLoading: payload };
    default:
      return state;
  }
}
