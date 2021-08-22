import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Tasks from "./Tasks/Tasks";
import { IGlobalState } from "../../interfaces";
import "./_container.scss";
import {
  // filterTasks,
  navigateToOtherStatus,
} from "../../redux/actions/todo.action";

const Container = () => {
  const state = useSelector((state: IGlobalState) => state);
  const dispatch = useDispatch();

  const handleNavClick = (status: string) => {
    dispatch(navigateToOtherStatus(status));
    // dispatch(filterTasks(status));
  };

  return (
    <div className="task-container">
      <div className="task-container__main">
        <div className="task-container__main-header">
          <span
            className={state.todo.activeStatus === "all" ? "active" : ""}
            onClick={() => handleNavClick("all")}
          >
            ALL
          </span>
          <span
            className={state.todo.activeStatus === "done" ? "active" : ""}
            onClick={() => handleNavClick("done")}
          >
            DONE
          </span>
          <span
            className={state.todo.activeStatus === "pending" ? "active" : ""}
            onClick={() => handleNavClick("pending")}
          >
            PENDING
          </span>
        </div>
        <div className="task-container__main-body">
          {state.todo.tasks.filter((task) => {
            if (state.todo.activeStatus === "all") return state.todo.tasks;
            return task.status === state.todo.activeStatus;
          }).length < 1 && (
            <div className="task-container__main-body-empty">No items...</div>
          )}
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Container;
