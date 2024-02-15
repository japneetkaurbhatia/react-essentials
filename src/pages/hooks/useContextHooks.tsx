import React, { createContext } from 'react'
import UseContextComponentA from './components/useContextComponentA'
import UseContextComponentB from './components/useContextComponentB';

export const UserContext = createContext("");
export const ProfileContext = createContext("");

function useContextHooks() {
  return (
    <div>
        <h1>useContextHooks</h1>
        <UserContext.Provider value={"username"}>
            <ProfileContext.Provider value='profile'>
                <UseContextComponentA />

                <UseContextComponentB />
            </ProfileContext.Provider>
        </UserContext.Provider>
        
    </div>
  )
}

export default useContextHooks