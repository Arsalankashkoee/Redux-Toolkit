import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Features/Counter/CounterSlice";

const CounterComponent = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();

  return (
    <section className="">
      <div className="container flex flex-col items-center justify-center gap-5">
        <h1 className="text-lg font-bold">Counter State</h1>
        <h2 className="text-lg font-semibold">Counter : {counter.value} </h2>
        <input
          type="text"
          className="border border-gray-200 outline-none focus:border-violet-600 rounded-md shadow-lg py-1 px-3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex items-center gap-5">
          <button
            className="bg-green-400 py-1 px-3 text-white rounded-lg shadow-sm"
            // onClick={() => dispatch(increment())}
            onClick={() => dispatch(increment(Number(inputValue) || 1))}
          >
            +
          </button>
          <button
            className="bg-red-400 py-1 px-3 text-white rounded-lg shadow-sm"
            // onClick={() => dispatch(decrement())}
            onClick={() => dispatch(decrement(Number(inputValue) || 1))}
          >
            -
          </button>
        </div>
      </div>
    </section>
  );
};

export default CounterComponent;
