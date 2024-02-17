import React from 'react'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import DocTitle1 from './components/DocTitle1'
import DocTitle2 from './components/DocTitle2'
import UserForm from './components/UserForm'

function customHooks() {
  return (
    <div>
        <h1>customHooks</h1>
        <h2>Document Title</h2>
        <DocTitle1 />
        <DocTitle2 />
        <h2>Counter</h2>
        <CounterOne />
        <CounterTwo />
        <h2>User Form</h2>
        <UserForm />
    </div>
  )
}

export default customHooks