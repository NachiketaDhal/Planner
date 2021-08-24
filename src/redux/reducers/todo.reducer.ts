import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO_START,
  EDIT_TODO_DONE,
  FILTER_TASKS,
  NAVIGATE_TO_OTHER_STATUS,
  TOGGLE_STATUS,
  // MOVE_TO_DONE,
  // MOVE_TO_PENDING,
  // MOVE_TO_PROGRESS
} from "../actionTypes";
import { IAction, IState, ITask } from "../../interfaces";

const tasksLocal = localStorage.getItem("TODOLIST-TASKS");
if (!tasksLocal) {
}

const initialState: IState = {
  tasks: JSON.parse(String(localStorage.getItem("TODOLIST-TASKS"))) || [],
  activeStatus: "all",
  // filteredTasks: [],
  // todoTasks:
  //   JSON.parse(String(localStorage.getItem("TODOLIST-TASKS")))?.filter(
  //     (task: ITask) => task.status === "pending"
  //   ) || [],
  // inProgressTasks:
  //   JSON.parse(String(localStorage.getItem("TODOLIST-TASKS")))?.filter(
  //     (task: ITask) => task.status === "progress"
  //   ) || [],
  // doneTasks:
  //   JSON.parse(String(localStorage.getItem("TODOLIST-TASKS")))?.filter(
  //     (task: ITask) => task.status === "done"
  //   ) || [],
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
    case TOGGLE_STATUS:
      return { ...state };
    case FILTER_TASKS:
      return { ...state };
    case NAVIGATE_TO_OTHER_STATUS:
      return { ...state, activeStatus: payload };
    default:
      return state;
  }
};
