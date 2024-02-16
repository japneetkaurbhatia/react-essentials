import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

    const reducer = (state, action) => {
        switch(action.type) {
            case 'increment': 
                return {...state, firstCounter: state.firstCounter + action.value}
            case 'decrement':
                return {...state, firstCounter: state.firstCounter - action.value}
            case 'increment2': 
                return {...state, secondCounter: state.secondCounter + action.value}
            case 'decrement2':
                return {...state, secondCounter: state.secondCounter - action.value}
            case 'reset':
                return {...state, firstCounter: initialState.firstCounter};
            case 'reset2':
                return {...state, secondCounter: initialState.secondCounter};
            default:
                return state
        }
    }

function UseReducerCounter2() {
    
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <h1>useReducerHooks</h1>
        <h2>UseReducerCounter2</h2>
        <h3>firstCounter : {count.firstCounter}</h3>
        <h3>secondCounter : {count.secondCounter}</h3>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>increment firstCounter by 1</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>decrement firstCounter by 1</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})}>increment firstCounter by 5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>decrement firstCounter by 5</button>
        <button onClick={() => dispatch({type: 'increment2', value: 1})}>increment secondCounter by 1</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 1})}>decrement secondCounter by 1</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset firstCounter</button>
        <button onClick={() => dispatch({type: 'reset2'})}>reset secondCounter</button>
    </div>
  )
}

export default UseReducerCounter2