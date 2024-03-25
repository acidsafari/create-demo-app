import React, { Component } from "react";
import EnhancedComponent from "../Counter/Counter.jsx";

export class Button1 extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button
          onClick={incrementCount}
        >
          Button 1 Clicked {count} times
        </button>
      </div>
    );
  }
}

export default EnhancedComponent(Button1);