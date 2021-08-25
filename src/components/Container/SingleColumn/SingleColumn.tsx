import React from "react";
import { useDispatch } from "react-redux";

import { filterTasks } from "../../../redux/actions/todo.action";
import { TStatus } from "../../../interfaces";

const SingleColumn = ({ children, id }: { children: any; id: TStatus }) => {
  const dispatch = useDispatch();

  const drop = (e: any) => {
    e.preventDefault();
    const card_id: any = e.dataTransfer!.getData("card_id");

    const card: any = document.getElementById(card_id);

    card.style.display = "block";

    // e.target.appendChild(card);

    dispatch(filterTasks(id, card_id));
  };

  const dragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      className="single-column__content"
      onDrop={drop}
      onDragOver={dragOver}
      id={id}
    >
      {children}
    </div>
  );
};

export default SingleColumn;
