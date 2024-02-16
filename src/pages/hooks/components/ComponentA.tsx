import React, { useContext } from 'react'
import { CountContext } from '../useReducerWithUseContext'

function ComponentA() {
    const countContext = useContext(CountContext);
  return (
    <div>
        <h1>ComponentA - {countContext.countState}</h1>
        <button onClick={() => countContext.dispatchState('increment')}>increment</button>
        <button onClick={() => countContext.dispatchState('decrement')}>decrement</button>
        <button onClick={() => countContext.dispatchState('reset')}>reset</button>
        
    </div>
  )
}

export default ComponentA