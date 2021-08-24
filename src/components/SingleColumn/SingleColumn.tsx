import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IGlobalState } from "../../interfaces";
import { filterTasks } from "../../redux/actions/todo.action";
import SingleTask from "../Container/SingleTask/SingleTask";
import "./_singleColumn.scss";

const SingleColumn = ({ children, id }: { children: any; id: any }) => {
  const dispatch = useDispatch();
  const state = useSelector((state: IGlobalState) => state);

  const drop = (e: any) => {
    e.preventDefault();
    const card_id: any = e.dataTransfer.getData("card_id");

    const card: any = document.getElementById(card_id);
    console.log(card);

    card.style.display = "block";

    e.target.appendChild(card);

    dispatch(filterTasks(id, card_id));
  };

  const dragOver = (e: any) => {
    e.preventDefault();
  };
  return (
    <div onDrop={drop} onDragOver={dragOver} id={id}>
      {state.todo.tasks
        .filter((task) => task.status === id)
        .map((card) => {
          return (
            <SingleTask
              id={card.id}
              status={card.status}
              value={card.value}
              key={card.id}
            />
          );
        })}
    </div>
  );
};

export default SingleColumn;
