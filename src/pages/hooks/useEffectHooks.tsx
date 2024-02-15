import React, { useEffect, useState } from 'react'
import FetchDataUsingUseEffectHooks from './components/FetchDataUsingUseEffectHooks';
import IntervalCounterUseEffectHooks from './components/IntervalCounterUseEffectHooks';

const useEffectHooks = () => {
    const[count, setCount] = useState(0);
    const[name, setName] = useState("");
    const[xCoor, setXCoor] = useState(0);
    const[yCoor, setYCoor] = useState(0);
    const[display, setDisplay] = useState(true);

    const incrementCount = () => {
        setCount(count+1);
    }

    const logMouseCoordinates = (e) => {
        console.log("logMouseCoordinates");
        
        setXCoor(e.clientX);
        setYCoor(e.clientY);
    }

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", e => logMouseCoordinates(e));
        
        document.title = `Clicked ${count} times`

        
        return () => {
            console.log("unmount");
            
            window.removeEventListener("mousemove", logMouseCoordinates);
        }
    },[count]); //[] -> runs only in initial render


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

        <h2>useEffect Only Once</h2>
        <h3>Mouse Coordinates = {xCoor} : {yCoor} </h3>

        <h2>useEffect UnMount Component</h2>
        <button onClick={()=> setDisplay(display => !display)}>toggle</button>
        {display && <h3>Mouse Coordinates = {xCoor} : {yCoor} </h3>}

        <IntervalCounterUseEffectHooks />
        
        <FetchDataUsingUseEffectHooks />
    </div>
  )
}

export default useEffectHooks