import { EXAMPLE, SET_LOADING } from "../actions-types/action-types";

export function example(value) {
  return {
    type: EXAMPLE,
    payload: value,
  };
}

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};
