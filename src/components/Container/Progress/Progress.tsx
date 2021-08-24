import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IGlobalState, ITask } from "../../../interfaces";
import { filterTasks } from "../../../redux/actions/todo.action";
import SingleTask from "../SingleTask/SingleTask";
import "./_progress.scss";

const Progress = () => {
  const state = useSelector((state: IGlobalState) => state);
  const dispatch = useDispatch();

  const drop = (e: any) => {
    e.preventDefault();
    const card_id: any = e.dataTransfer.getData("card_id");

    const card: any = document.getElementById(card_id);
    console.log(card);

    card.style.display = "block";

    e.target.appendChild(card);
    dispatch(filterTasks("progress", card_id));
  };

  const dragOver = (e: any) => {
    e.preventDefault();
  };

  const dragStart = (e: any) => {
    const { target } = e;

    e.dataTransfer.setData("card_id", target.id);

    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  return (
    <div className="task-section task-section__progress">
      <div className="task-section__header">
        <h2>In Progress</h2>
      </div>
      <div
        className="task-section__body"
        onDrop={drop}
        onDragOver={dragOver}
        id="progress"
      >
        {state.todo.tasks
          .filter((task: ITask) => task.status === "progress")
          .map((task) => {
            return (
              <div
                key={task.id}
                draggable="true"
                onDragStart={dragStart}
                onDragOver={(e) => e.stopPropagation()}
              >
                <SingleTask
                  id={task.id}
                  value={task.value}
                  status={task.status}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Progress;
