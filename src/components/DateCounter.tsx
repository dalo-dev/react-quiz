import { ChangeEvent, useState } from "react";

function DateCounter() {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    setCount((count) => count - step);
  };

  const inc = function () {
    // setCount((count) => count + 1);
    setCount((count) => count + step);
  };

  const defineCount = function (e: ChangeEvent<HTMLInputElement>) {
    setCount(Number((e.target as HTMLInputElement).value));
  };

  const defineStep = function (e: ChangeEvent<HTMLInputElement>) {
    setStep(Number((e.target as HTMLInputElement).value));
  };

  const reset = function () {
    setCount(0);
    setStep(1);
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