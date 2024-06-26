import React, { useContext } from "react";
import { CountContext } from "../useReducerWithUseContext";

function ComponentD() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>ComponentD - {countContext.countState}</h1>
      <button onClick={() => countContext.dispatchState("increment")}>
        increment
      </button>
      <button onClick={() => countContext.dispatchState("decrement")}>
        decrement
      </button>
      <button onClick={() => countContext.dispatchState("reset")}>reset</button>
    </div>
  );
}

export default ComponentD;
