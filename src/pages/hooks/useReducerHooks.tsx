import React from "react";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import UseReducerCounter from "./components/UseReducerCounter";
import UseReducerCounter2 from "./components/UseReducerCounter2";
import UseReducerCounter3 from "./components/UseReducerCounter3";
function useReducerHooks() {
  return (
    <div>
      <UseReducerCounter />
      <UseReducerCounter2 />
      <UseReducerCounter3 />

      <h1>DataFetching with useState</h1>
      <DataFetchingOne />

      <h1>DataFetching with useReducer</h1>
      <DataFetchingTwo />
    </div>
  );
}
export default useReducerHooks;
