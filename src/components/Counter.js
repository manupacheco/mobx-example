import React, { Component } from 'react'
import { observer } from 'mobx-react';


class Counter extends Component {
  render() {
    const { value, increment, decrement } = this.props.store
    return (
      <div>
        Counter: {value}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    )
  }
}

export default observer(Counter);
