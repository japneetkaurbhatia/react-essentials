import React from 'react'
import { UserContext } from '../useContextHooks'

function UseContextComponentA() {
  return (
    <div>
        <h1>UseContextComponentA</h1>
        <UserContext.Consumer> 
            {
                name => {
                    return <h3>name is {name}</h3>
                }
            }
        </UserContext.Consumer>
    </div>

  )
}

export default UseContextComponentA