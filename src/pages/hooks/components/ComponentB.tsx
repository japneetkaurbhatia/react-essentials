import React, { useContext } from 'react'
import { CountContext } from '../useReducerWithUseContext'
import ComponentD from './ComponentD';

function ComponentB() {
    const countContext = useContext(CountContext);
  return (
    <div>
        <h1>ComponentB - {countContext.countState}</h1>
        <button onClick={() => countContext.dispatchState('increment')}>increment</button>
        <button onClick={() => countContext.dispatchState('decrement')}>decrement</button>
        <button onClick={() => countContext.dispatchState('reset')}>reset</button>
        <ComponentD />
    </div>
  )
}

export default ComponentB