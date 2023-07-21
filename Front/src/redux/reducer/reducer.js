import { EXAMPLE } from "../actions-types/action-types";

const initialState = {
  anyData: ["valueExample1", "valueExample2"],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case EXAMPLE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
