import React from "react";
import withCounter from "../withCounter";

const ButtonCounter = ({ count, incrementCount, name }) => {
  return (
    <button onClick={incrementCount}>
      {name} Clicked {count} times
    </button>
  );
};

export default withCounter(ButtonCounter);
