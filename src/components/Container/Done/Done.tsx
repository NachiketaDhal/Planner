import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IGlobalState, ITask } from "../../../interfaces";
import { filterTasks } from "../../../redux/actions/todo.action";
import SingleTask from "../SingleTask/SingleTask";
import "./_done.scss";

const Done = () => {
  const state = useSelector((state: IGlobalState) => state);
  const dispatch = useDispatch();

  const drop = (e: any) => {
    e.preventDefault();
    const card_id: any = e.dataTransfer.getData("card_id");

    const card: any = document.getElementById(card_id);
    console.log(card);

    card.style.display = "block";

    e.target.appendChild(card);

    dispatch(filterTasks("done", card_id));
  };

  const dragOver = (e: any) => {
    e.preventDefault();
  };

  const dragStart = (e: any) => {
    const { target } = e;

    e.dataTransfer.setData("card_id", target);

    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  return (
    <div className="task-section task-section__done">
      <div className="task-section__header">
        <h2>Done</h2>
      </div>
      <div
        className="task-section__body"
        onDrop={drop}
        onDragOver={dragOver}
        id="done"
      >
        {state.todo.tasks
          .filter((task: ITask) => task.status === "done")
          .map((task) => {
            return (
              <div
                key={task.id}
                id={task.id}
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

export default Done;
