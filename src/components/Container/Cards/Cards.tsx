import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { IGlobalState, TStatus } from "../../../interfaces";
import SingleTask from "../SingleTask/SingleTask";

const Cards = ({ type }: { type: TStatus }) => {
  const state = useSelector((state: IGlobalState) => state);

  const bgColor: any =
    type === "pending" ? "red" : type === "progress" ? "orange" : "green";
  const style = { border: `3px solid ${bgColor}` };

  return (
    <Container className="cards" style={style}>
      {state.todo.tasks
        .filter((t) => t.status === type)
        .map((task) => (
          <SingleTask
            id={task.id}
            status={task.status}
            value={task.value}
            key={task.id}
            draggable="true"
          />
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 300px;
  min-width: 300px;
  align-items: center;
  padding: 30px 0;
`;

export default Cards;
