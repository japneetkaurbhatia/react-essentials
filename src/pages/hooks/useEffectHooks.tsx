import React, { useEffect, useState } from 'react'

const useEffectHooks = () => {
    const[count, setCount] = useState(0);
    const[name, setName] = useState("");

    const incrementCount = () => {
        setCount(count+1);
    }

    useEffect(() => {
        console.log("useEffect called");
        
        document.title = `Clicked ${count} times`
    },[count]);


    const setNameValue = (e) => {
        setName(e.target.value);
    }

   
  return (
    <div>
        <h1>useEffect Example</h1>
        <h2>Page Title Change</h2>
        <button onClick={incrementCount}>click me {count}</button>

        <h2>Conditionally run useEffect</h2>

        <input type="text" placeholder='name' onChange={(e) => setNameValue(e)} value={name}/>
        <button onClick={incrementCount}>click me {count}</button>

        
        
    </div>
  )
}

export default useEffectHooks