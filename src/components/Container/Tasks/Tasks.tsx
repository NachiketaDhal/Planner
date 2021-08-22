import React from "react";
import { useSelector } from "react-redux";

import { IGlobalState } from "../../../interfaces";
import SingleTask from "../SingleTask/SingleTask";
import "./_tasks.scss";

const Tasks = () => {
  const state = useSelector((state: IGlobalState) => state);
  // console.log(state.todo.filteredTasks);

  return (
    <div>
      {state.todo.tasks
        .filter((task) => {
          if (state.todo.activeStatus === "all") return state.todo.tasks;
          return task.status === state.todo.activeStatus;
        })
        .map((task) => (
          <SingleTask
            key={task.id}
            id={task.id}
            value={task.value}
            status={task.status}
          />
        ))}
    </div>
  );
};

export default Tasks;
