import React, { useReducer } from 'react'

const initialState = 0;
    const reducer = (state, action) => {
        switch(action) {
            case 'increment': 
            return state + 1
            case 'decrement':
                return state - 1
            case 'reset':
                return initialState;
            default:
                return state
        }
    }

function UseReducerCounter3() {
    
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>useReducerHooks</h1>
        <h2>UseReducerCounter3</h2>
        <h3>count : {count}</h3>
        <button onClick={() => dispatch('increment')}>increment</button>
        <button onClick={() => dispatch('decrement')}>decrement</button>
        <button onClick={() => dispatch('reset')}>reset</button>
        <h3>count2 : {count2}</h3>
        <button onClick={() => dispatch2('increment')}>increment</button>
        <button onClick={() => dispatch2('decrement')}>decrement</button>
        <button onClick={() => dispatch2('reset')}>reset</button>
    </div>
  )
}

export default UseReducerCounter3