import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO_START,
  EDIT_TODO_DONE,
  FILTER_TASKS,
} from "../actionTypes";
import { IAction, IState } from "../../interfaces";

// const tasksLocal = localStorage.getItem("TODOLIST-TASKS");

const initialState: IState = {
  tasks: JSON.parse(String(localStorage.getItem("TODOLIST-TASKS"))) || [],
  activeStatus: "all",
  inputValue: "",
  edit: false,
  editedItem: { id: "", status: "", value: "" },
};

export const todoReducer = (
  state: IState = initialState,
  action: IAction
): IState => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return { ...state, tasks: payload };
    case DELETE_TODO:
      return { ...state, tasks: payload };
    case EDIT_TODO_START:
      return { ...state };
    case EDIT_TODO_DONE:
      return { ...state };
    case FILTER_TASKS:
      return { ...state };
    default:
      return state;
  }
};
