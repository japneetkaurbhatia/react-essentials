import React, { useEffect, useState } from 'react'

export default function DocTitle2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title= `Count: ${count}`
    }, [count])
    
  return (
    <div>
        <h2>DocTitle2</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>count: {count}</button>
    </div>
  )
}
