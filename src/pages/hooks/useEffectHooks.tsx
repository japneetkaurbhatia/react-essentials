import React, { useEffect, useState } from 'react'

const useEffectHooks = () => {
    const[count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1);
    }

    useEffect(() => {
        document.title = `Clicked ${count} times`
    });

   
  return (
    <div>
        <h1>useEffect Example</h1>
        <h2>increment counter</h2>
        <button onClick={incrementCount}>click me {count}</button>

        
        
    </div>
  )
}

export default useEffectHooks