import { Provider } from "react-redux";
import AddTodoForm from "./Components/Todos/AddTodoForm";
import TodoList from "./Components/Todos/TodoList";
import TotalCompleteItems from "./Components/Todos/TotalCompleteTodo";
// import CounterComponent from "./Components/CounterComponent";
import { store } from "./Features/store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      {/* <CounterComponent /> */}
      <div className="  ">
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </Provider>
  );
}

export default App;
