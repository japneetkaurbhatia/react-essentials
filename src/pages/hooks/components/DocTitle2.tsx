import React, { useEffect, useState } from 'react'
import useDocumentTitle from './custom/useDocumentTitle';

export default function DocTitle2() {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);
    
  return (
    <div>
        <h2>DocTitle2</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>count: {count}</button>
    </div>
  )
}
