import { types } from "./list.types";

let initState = {
  Lists: [],
  message: "",
};

export const listReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.create:
      return;
    case types.retrieve:
    case types.delete:
    case types.update:
    default:
      return state;
  }
};
