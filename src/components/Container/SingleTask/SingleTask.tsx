import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { IGlobalState, ITaskProps } from "../../../interfaces";
import {
  deleteTaskFromTodo,
  editTodoStart,
  toggleStatus,
} from "../../../redux/actions/todo.action";
import "./_singleTask.scss";

const SingleTask = ({ id, status, value }: ITaskProps) => {
  const dispatch = useDispatch();
  const state = useSelector((state: IGlobalState) => state);

  const foundTask = state.todo.tasks.filter((task) => task.id === id);

  // const styleColor = foundTask[0].status === "done" ? "#9a9fa7" : "#dce0e3";
  // const styleBgColor = foundTask[0].status === "done" ? "#ea5f8e" : "#5c6064";

  const handleEditClick = (id: string) => {
    dispatch(editTodoStart(id));
  };

  return (
    <div>
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
      {/* <hr
        style={{
          border: "none",
          borderTop: "1px solid #323232",
          margin: "10px 0",
        }}
      /> */}
    </div>
  );
};

export default SingleTask;
