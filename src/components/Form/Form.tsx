import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTaskToTodo, editTodoDone } from "../../redux/actions/todo.action";
import { IGlobalState } from "../../interfaces";
import "./_form.scss";

const Form = () => {
  const state = useSelector((state: IGlobalState) => state);
  // console.log(state.todo.tasks);
  const [inputValue, setInputValue] = useState(state.todo.inputValue);

  const dispatch = useDispatch();

  useEffect(() => {
    if (state.todo.edit) {
      const value = state.todo.editedItem.value;
      setInputValue(value);
      return;
    }
    setInputValue("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.todo.edit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.todo.edit) {
      state.todo.editedItem.value = inputValue;
      dispatch(editTodoDone());
      setInputValue("");
      return;
    }
    if (inputValue) {
      dispatch(addTaskToTodo(inputValue));
    }
    state.todo.inputValue = "";
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div className="form-container">
      <form className="form-container__form">
        <input
          type="text"
          className="form-container__form-input"
          placeholder="Add a task..."
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="form-container__form-btn"
          onClick={handleSubmit}
        >
          {state.todo.edit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
