import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncTodos } from "../../Features/Todos/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncTodos());
  }, []);

  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div className="container">
      <h2 className="flex items-center justify-center">TodoList</h2>
      <ul className="list-group ">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
