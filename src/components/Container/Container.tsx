import React from "react";
import styled from "styled-components";

import "./_container.scss";
import SingleColumn from "./SingleColumn/SingleColumn";
import Cards from "./Cards/Cards";

const Container = () => {
  return (
    <Main className="all-task-container">
      <SingleColumn id="pending">
        <h2>Pending</h2>
        <Cards type="pending"></Cards>
      </SingleColumn>
      <SingleColumn id="progress">
        <h2>Progress</h2>
        <Cards type="progress"></Cards>
      </SingleColumn>
      <SingleColumn id="done">
        <h2>Done</h2>
        <Cards type="done"></Cards>
      </SingleColumn>
    </Main>
  );
};

const Main = styled.div`
  h2 {
    text-align: center;
    font-size: 25px;
    color: #3d434b;
    padding-bottom: 20px;
  }
`;

export default Container;
