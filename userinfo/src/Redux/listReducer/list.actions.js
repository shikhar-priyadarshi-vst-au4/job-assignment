import { types } from "./list.types";

export const create = (data) => {
  return { type: types.create, payload: data };
};

export const retrieve = () => {
  return { type: types.retrieve, payload: "" };
};

export const Delete = (data) => {
  return { type: types.delete, payload: data };
};

export const update = (prev, data) => {
  return { type: types.update, payload: { prev, data } };
};
