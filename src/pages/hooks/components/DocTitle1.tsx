import React, { useEffect, useState } from 'react'

export default function DocTitle1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title= `Count: ${count}`
    }, [count])
    
  return (
    <div>
        <h2>DocTitle1</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>count: {count}</button>
    </div>
  )
}
