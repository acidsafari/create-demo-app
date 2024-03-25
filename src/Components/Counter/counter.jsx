import React, { Component } from "react";

const EnhancedComponent = OriginalComponent => {
  class NewComponent extends Component {
    state = { count: 0 };
    incrementCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return NewComponent;
};

export default EnhancedComponent;

/* HOW IT LOOK BEFORE IT GOT REPOROCESSED 
import React, { Component } from 'react'

export class Counter extends Component {
    state = {count:0}
    incCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incCount}>
The button has been clicked {this.state.count} times
                </button>
            </div>
        )
    }
}

export default Counter;
*/