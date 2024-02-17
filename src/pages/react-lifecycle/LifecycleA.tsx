import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "mnop"
        }
        console.log("LifecycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount(): void {
        console.log("LifecycleA componentDidMount");
    }

  render() {
    console.log("LifecycleA render");
    
    return (
      <div>
        <h1>LifecycleA</h1>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA