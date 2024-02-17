import React from "react";
import { useState } from "react";

function State() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>State</h1>
      <h2>name: {name}</h2>
      <button onClick={() => setName("mnop")}>set name</button>
    </div>
  );
}

export default State;
