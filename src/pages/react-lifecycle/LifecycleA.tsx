import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "mnop",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount(): void {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any,
  ): boolean {
    console.log("LifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "qwerty",
    });
  };

  render() {
    console.log("LifecycleA render");

    return (
      <div>
        <h1>LifecycleA</h1>
        <button onClick={this.changeState}>update state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
