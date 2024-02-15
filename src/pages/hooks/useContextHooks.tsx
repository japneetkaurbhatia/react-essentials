import React, { createContext } from 'react'
import UseContextComponentA from './components/useContextComponentA'

export const UserContext = createContext("");
export const ProfileContext = createContext("");

function useContextHooks() {
  return (
    <div>
        <h1>useContextHooks</h1>
        <UserContext.Provider value={"username"}>
            <ProfileContext.Provider value='profile1'>
                <UseContextComponentA />
            </ProfileContext.Provider>
        </UserContext.Provider>
        
    </div>
  )
}

export default useContextHooks