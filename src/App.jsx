import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import { CoverPage } from 'components';

class App extends Component {
  state = {};

  render() {
    return <CoverPage />;
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
