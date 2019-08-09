import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello World!!!</h1>
        <h2
          style={{
            color: count < 0 ? "red" : count > 0 ? "seagreen" : "black"
          }}
        >
          Count: {count}
        </h2>
        <button
          onClick={() =>
            this.setState(state => ({
              count: state.count + 1
            }))
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState(state => ({
              count: state.count - 1
            }))
          }
        >
          -
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
