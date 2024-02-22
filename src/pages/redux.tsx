import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { decreaseNumber, increaseNumber } from './redux/actions';
import store from './redux/store';

function Redux() {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
  return (
    <Provider store={store}>
    <div>
        <h1>Redux</h1>
        <h2>Increment/Decrement counter</h2> 
        <div>
            <a onClick={
                () => dispatch(decreaseNumber())
            }>Decrement</a>
            <input name='quantity' type="text" value={myState} />
            <a onClick={
                () => dispatch(increaseNumber())
            }>Increment</a>
        </div>
    </div>
    </Provider>
  )
}

export default Redux