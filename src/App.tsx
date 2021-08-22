import React from "react";
import { FaTasks } from "react-icons/fa";

import Container from "./components/Container/Container";

import Form from "./components/Form/Form";
import "./_app.scss";

function App() {
  return (
    <div className="main-container">
      <div>
        <h1
          className="heading"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <FaTasks style={{ fontSize: "30px" }} />
          </span>
          TODO-LIST
        </h1>
      </div>
      <Form />
      <Container />
    </div>
  );
}

export default App;
