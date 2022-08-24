import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/CounterSlice";
import todoSliceReducer from "./Todos/todoSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoSliceReducer,
  },
});
