import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";

import { ITaskProps } from "../../../interfaces";
import {
  deleteTaskFromTodo,
  editTodoStart,
} from "../../../redux/actions/todo.action";
import "./_singleTask.scss";

const SingleTask = ({ id, status, value, draggable }: ITaskProps) => {
  const dispatch = useDispatch();

  const handleEditClick = (id: string) => {
    dispatch(editTodoStart(id));
  };

  const dragStart = (e: any) => {
    const { target } = e;

    e.dataTransfer!.setData("card_id", target.id);

    // setTimeout(() => {
    //   target.style.display = "none";
    // }, 0);
  };

  const dragOver = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div
      onDragStart={dragStart}
      onDragOver={dragOver}
      draggable={draggable}
      id={id}
    >
      <div className="singletask-container">
        <div className="single-task">
          <h1>&nbsp;&nbsp;{value}</h1>
        </div>
        <div className="icons">
          <button className="icons-btn" onClick={() => handleEditClick(id)}>
            <MdEdit size={15} />
          </button>
          <button
            className="icons-btn"
            onClick={() => dispatch(deleteTaskFromTodo(id))}
          >
            <AiFillDelete size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
