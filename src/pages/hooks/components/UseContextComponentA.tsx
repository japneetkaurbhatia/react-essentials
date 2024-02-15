import React from 'react'
import { ProfileContext, UserContext } from '../useContextHooks'

function UseContextComponentA() {
  return (
    <div>
        <h1>UseContextComponentA</h1>
        <UserContext.Consumer> 
            {
                name => {
                    return (
                        <ProfileContext.Consumer>
                            {
                                profile => {
                                    return (
                                        <h3>name is {name} and profile is {profile}</h3>
                                    )
                                }
                            }
                        </ProfileContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>

  )
}

export default UseContextComponentA