import React, { useContext } from 'react'
import { CountContext } from '../useReducerWithUseContext'
import ComponentE from './ComponentE';

function ComponentC() {
    const countContext = useContext(CountContext);
  return (
    <div>
        <h1>ComponentC - {countContext.countState}</h1>
        <button onClick={() => countContext.dispatchState('increment')}>increment</button>
        <button onClick={() => countContext.dispatchState('decrement')}>decrement</button>
        <button onClick={() => countContext.dispatchState('reset')}>reset</button>
        <ComponentE />
    </div>
  )
}

export default ComponentC