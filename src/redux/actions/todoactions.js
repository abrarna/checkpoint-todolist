import { ADDTASK, DELETETASK } from "./types";
export const addTask = (newTask) => {
  return { type: ADDTASK, payload: newTask };
};

export const deleteTask = (id) => {
  return { type: DELETETASK, payload: id };
};
