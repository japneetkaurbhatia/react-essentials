import React, { useEffect, useState } from "react";

function IntervalCounterUseEffectHooks() {
  const [timer, setTimer] = useState(0);

  const doTimer = () => {
    setTimer((timer) => timer + 1);
  };

  useEffect(() => {
    setInterval(doTimer, 1000);
    return () => {
      clearInterval();
    };
  }, []); // if setTimer(timer) then  we need to add timer in []
  return (
    <div>
      <h1>timer count: {timer}</h1>
    </div>
  );
}

export default IntervalCounterUseEffectHooks;
