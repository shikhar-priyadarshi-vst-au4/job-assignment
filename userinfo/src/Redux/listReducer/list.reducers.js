import { types } from "./list.types";

let initState = {
  Lists: [],
  message: "",
};

export const listReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.create:
      return { ...state, Lists: [...state.Lists, payload] };
    case types.delete:
      return { ...state, Lists: state.Lists.filter((v) => v !== payload) };
    case types.update:
      let index = state.Lists.indexOf(payload.prev);
      state.Lists.splice(index, 1, payload.data);
      return {
        ...state,
        Lists: state.Lists,
      };
    case types.retrieve:
    default:
      return state;
  }
};
