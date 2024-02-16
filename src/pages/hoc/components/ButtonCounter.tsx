import React, { useState } from 'react'

function ButtonCounter() {
    const[count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((count) => count + 1)
    }

  return (
    <div>
        <h2>buttonCounter</h2>
        <button onClick={incrementCount}>clicked {count} times</button>
    </div>
  )
}

export default ButtonCounter