import { EXAMPLE } from "../actions-types/action-types";

export function example(value) {
  return {
    type: EXAMPLE,
    payload: value,
  };
}
