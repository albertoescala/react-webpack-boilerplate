import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <p> React here! </p>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
