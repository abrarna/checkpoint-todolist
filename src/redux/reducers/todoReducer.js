import { ADDTASK, DELETETASK } from "../actions/types";

const initialsate = {
  tasks: [
    {
      taskName: "abrar",
      id: 1,
      isDone: false,
    },
  ],

  filter: [],
  current: null,
};
const todoReducer = (state = initialsate, { type, payload }) => {
  switch (type) {
    case ADDTASK:
      return { ...state, tasks: [...state.tasks, payload] };

    case DELETETASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload),
      };

    default:
      return state;
  }
};
export default todoReducer;
