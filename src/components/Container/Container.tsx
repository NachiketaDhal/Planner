import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import Tasks from "./Tasks/Tasks";
import { IGlobalState } from "../../interfaces";
import "./_container.scss";
import {
  filterTasks,
  // filterTasks,
  navigateToOtherStatus,
} from "../../redux/actions/todo.action";
import Todo from "./Todo/Todo";
import Progress from "./Progress/Progress";
import Done from "./Done/Done";
import SingleColumn from "../SingleColumn/SingleColumn";

const Container = () => {
  const state = useSelector((state: IGlobalState) => state);
  const dispatch = useDispatch();

  const drop = (e: any) => {
    e.preventDefault();
    const card_id: any = e.dataTransfer.getData("card_id");

    const card: any = document.getElementById(card_id);
    console.log(card);

    card.style.display = "block";

    e.target.appendChild(card);

    dispatch(filterTasks("pending", card_id));
  };

  const dragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      className="all-task-container"
      // onDrop={drop}
      // onDragOver={dragOver}
      // id="main_id"
    >
      {/* <SingleColumn id="todo"> */}
      <Todo />
      {/* </SingleColumn> */}
      {/* <SingleColumn id="progress"> */}
      <Progress />
      {/* </SingleColumn> */}
      {/* <SingleColumn id="done"> */}
      <Done />
      {/* </SingleColumn> */}
    </div>
  );
};

export default Container;
