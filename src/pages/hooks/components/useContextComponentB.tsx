import React, { useContext } from 'react'
import { ProfileContext, UserContext } from '../useContextHooks'

function UseContextComponentB() {
    const user = useContext(UserContext);
    const profile = useContext(ProfileContext);
  return (
    <div>
        <h1>useContextComponentB</h1>
        <h2>Better Version</h2>

        {user} - {profile}
    </div>
  )
}

export default UseContextComponentB

