import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO_START,
  EDIT_TODO_DONE,
  // FILTER_TASKS,
  NAVIGATE_TO_OTHER_STATUS,
  TOGGLE_STATUS,
} from "../actionTypes";
import { IGlobalState, ITask } from "../../interfaces";

// localstorage Tasks
let localStorageTasks = JSON.parse(
  String(localStorage.getItem("TODOLIST-TASKS"))
);
let editIndex: number;

export const addTaskToTodo =
  (task: string) => (dispatch: any, getState: () => IGlobalState) => {
    const newTask = {
      id: Math.random().toString(36).slice(2),
      value: task,
      status: "pending",
    };
    const newTaskList = [...getState().todo.tasks, newTask];

    // localstorage
    localStorageTasks = [...newTaskList];
    localStorage.setItem("TODOLIST-TASKS", JSON.stringify(localStorageTasks));

    dispatch({
      type: ADD_TODO,
      payload: newTaskList,
    });
  };

export const deleteTaskFromTodo =
  (id: string) => (dispatch: any, getState: () => IGlobalState) => {
    const newTaskList = getState().todo.tasks.filter(
      (task: ITask) => task.id !== id
    );

    if (id === getState().todo.editedItem.id) {
      getState().todo.edit = false;
    }

    // localstorage
    localStorageTasks = [...newTaskList];
    localStorage.setItem("TODOLIST-TASKS", JSON.stringify(localStorageTasks));

    dispatch({ type: DELETE_TODO, payload: newTaskList });
  };

export const toggleStatus =
  (id: string) => (dispatch: any, getState: () => IGlobalState) => {
    const foundTask: Array<ITask> = getState().todo.tasks.filter(
      (task: ITask) => task.id === id
    );

    // localstorage
    const index = localStorageTasks.map((task: any) => task.id).indexOf(id);
    const foundTaskInLocal: any = JSON.parse(
      String(localStorage.getItem("TODOLIST-TASKS"))
    ).filter((task: ITask) => task.id === id);

    if (foundTask[0].status === "pending") {
      foundTask[0].status = "done";

      // localstorage
      foundTaskInLocal[0].status = "done";
    } else {
      foundTask[0].status = "pending";

      // localstorage
      foundTaskInLocal[0].status = "pending";
    }

    // localstorage
    // console.log(foundTaskInLocal);
    localStorageTasks.splice(index, 1, foundTaskInLocal[0]);
    localStorage.setItem("TODOLIST-TASKS", JSON.stringify(localStorageTasks));

    dispatch({ type: TOGGLE_STATUS });
  };

// export const filterTasks = (ft: string) => (dispatch: any, getState: () => IGlobalState) => {
//   let newTaskList;
//   if (ft === "done") {
//     newTaskList = getState().todo.tasks.filter(
//       (task: ITask) => task.status === "done"
//     );
//   } else if (ft === "pending") {
//     newTaskList = getState().todo.tasks.filter(
//       (task: ITask) => task.status === "pending"
//     );
//   } else {
//     newTaskList = getState().todo.tasks;
//   }
//   dispatch({ type: FILTER_TASKS, payload: newTaskList });
// };

export const navigateToOtherStatus =
  (status: string) => (dispatch: any, getState: () => IGlobalState) => {
    const activeNav = status;
    dispatch({ type: NAVIGATE_TO_OTHER_STATUS, payload: activeNav });
  };

export const editTodoStart =
  (id: string) => (dispatch: any, getState: () => IGlobalState) => {
    const foundTask = getState().todo.tasks.filter((task) => task.id === id);
    getState().todo.edit = true;
    getState().todo.editedItem = foundTask[0];
    getState().todo.inputValue = foundTask[0].value;
    foundTask[0].value = getState().todo.inputValue;

    // localstorage
    editIndex = localStorageTasks.map((task: any) => task.id).indexOf(id);

    dispatch({ type: EDIT_TODO_START });
  };

export const editTodoDone =
  () => (dispatch: any, getState: () => IGlobalState) => {
    getState().todo.edit = false;
    getState().todo.editedItem = { id: "", status: "", value: "" };
    getState().todo.inputValue = "";

    // localstorage
    localStorageTasks[editIndex].value = getState().todo.tasks[editIndex].value;
    localStorage.setItem("TODOLIST-TASKS", JSON.stringify(localStorageTasks));

    dispatch({ type: EDIT_TODO_DONE });
  };
