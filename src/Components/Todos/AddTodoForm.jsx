import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAsyncTodos } from "../../Features/Todos/todoSlice";



const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(addTodo({ title: value }));
    dispatch(addAsyncTodos({ title: value }));
  };

  return (
    <form onSubmit={onSubmit} className=" container form-inline mt-3 mb-3 flex items-center justify-center gap-5">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="btn btn-primary mb-2 ">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
