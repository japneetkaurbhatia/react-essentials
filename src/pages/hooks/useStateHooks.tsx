import React, { useState } from 'react'
import StyledButton from '../../components/StyledButton'

const useStateHooks = () => {
    const[count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    }

    const decrementCount = () => {
      setCount(count-1);
  }

  const resetCount = () => {
    setCount(0);
}

const incrementCountBy5 = () => {
  for(let i = 0; i < 5; i++)
    setCount(count => count+1);
}

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
        
    </div>
  )
}

export default useStateHooks