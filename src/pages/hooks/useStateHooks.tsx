import React, { useState } from "react";
import StyledButton from "../../components/StyledButton";

const useStateHooks = () => {
  const [count, setCount] = useState(0);

  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const [items, setItems] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const incrementCountBy5 = () => {
    for (let i = 0; i < 5; i++) setCount((count) => count + 1);
  };

  const setFirstName = (e) => {
    setName({
      ...name,
      firstName: e.target.value,
    });
  };

  const setLastName = (e) => {
    setName({
      ...name,
      lastName: e.target.value,
    });
  };

  const appendNumberInArray = (e) => {
    let number = Math.random() * 10 + 1;
    setItems([...items, Math.floor(number)]);
  };

  return (
    <div>
      <h1>useState Example</h1>
      <h2>increment counter</h2>
      <button onClick={incrementCount}>click me {count}</button>

      <h2>increment decrement counter</h2>
      <h3>{count}</h3>
      <button onClick={incrementCount}>click me to increment</button>
      <button onClick={resetCount}>click me to reset</button>
      <button onClick={decrementCount}>click me to decrement</button>
      <button onClick={incrementCountBy5}>click me to increment by 5</button>

      <h2>useState Object</h2>
      <input type="text" value={name.firstName} onChange={setFirstName} />
      <input type="text" value={name.lastName} onChange={setLastName} />
      <h3>
        hello {name.firstName} {name.lastName}
      </h3>

      <h2>useState Array</h2>
      <button onClick={appendNumberInArray}>Add a number</button>
      {items.map((i) => (
        <li>{i}</li>
      ))}
    </div>
  );
};

export default useStateHooks;
