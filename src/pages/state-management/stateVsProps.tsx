import Link from 'next/link'
import React from 'react'
import Props from './props'
import State from './State'

function stateVsProps() {
  return (
    <div>
        <Link href={"https://www.linkedin.com/pulse/state-vs-props-react-whats-difference-mohammad-shoeb-faizan/"}>stateVsProps</Link>
        <State />
        <Props props={{name: "mnop"}} />
    </div>
  )
}

export default stateVsProps