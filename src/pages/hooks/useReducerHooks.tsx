import React from 'react'
import UseReducerCounter from './components/UseReducerCounter'
import UseReducerCounter2 from './components/UseReducerCounter2'
import UseReducerCounter3 from './components/UseReducerCounter3'
function useReducerHooks() {
  return (
    <div>
        <UseReducerCounter />
        <UseReducerCounter2 />
        <UseReducerCounter3 />
    </div>
  )
}
export default useReducerHooks