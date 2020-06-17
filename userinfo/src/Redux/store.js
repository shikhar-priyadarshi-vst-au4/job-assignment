import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { listReducer as list } from "./listReducer/list.reducers";

export const configureStore = () => {
  return createStore(list, applyMiddleware(thunkMiddleware));
};
