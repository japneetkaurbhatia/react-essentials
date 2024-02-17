import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prevCount) => prevCount + 1);
    };

    console.log("HOC", props.name);

    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props.name}
      />
    );
  };

  return WithCounter;
};

export default withCounter;
