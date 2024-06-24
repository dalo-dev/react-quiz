import { ChangeEvent, useReducer } from "react";

interface ReducerState {
  count: number;
  step: number;
}

const initialState: ReducerState = { count: 0, step: 1 };

type Action =
  | { type: "dec" }
  | { type: "inc" }
  | { type: "setCount"; payload: number }
  | { type: "setStep"; payload: number }
  | { type: "reset" };

const reducer = function (currentState: ReducerState, action: Action) {
  switch (action.type) {
    case "dec":
      return { ...currentState, count: currentState.count - currentState.step };
    case "inc":
      return { ...currentState, count: currentState.count + currentState.step };
    case "setCount":
      return { ...currentState, count: action.payload };
    case "setStep":
      return { ...currentState, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown Error!");
  }
};

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
