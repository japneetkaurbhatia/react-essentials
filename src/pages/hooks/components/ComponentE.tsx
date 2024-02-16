import React, { useContext } from 'react'
import { CountContext } from '../useReducerWithUseContext'
import ComponentF from './ComponentF';

function ComponentE() {
    const countContext = useContext(CountContext);
  return (
    <div>
        <h1>ComponentE - {countContext.countState}</h1>
        <button onClick={() => countContext.dispatchState('increment')}>increment</button>
        <button onClick={() => countContext.dispatchState('decrement')}>decrement</button>
        <button onClick={() => countContext.dispatchState('reset')}>reset</button>
        <ComponentF />
    </div>
  )
}

export default ComponentE