//@flow
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

class App extends Component {
  constructor() {
      super()
    }

  render(){
    return <div>
      <h1>EZ React is up and running</h1>
      <div>
        Now go edit src/index.js and write some code! :)
      </div>
    </div>
  }
}

render(
  <App />,
  document.getElementById('app')
);
