//@flow
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor() {
      super()
    }

  render(){
    return <Grid fluid>
      <Row>
        <Col md={12}>
      <h1>EZ React</h1>
      <div>Developing with React has never been this easy. Just add this package as a dependency and you're good to go. It contains React, Webpack and is fully ES2015 compatible.</div>
    </Col>
    </Row>
    <Row>
      <Col md={6}>
      <div>
        <h4>Instructions</h4>
        <p>
          1. Create a new folder
        </p><p>
          2. Type <strong>npm init</strong>
       </p><p>
          3. Type <strong>npm i --save ezreact</strong>
       </p><p>
          4. Success
        </p>
      </div>
      <div>
        Source: <a href="https://github.com/svenanders/ezreact">github.com/svenanders/ezreact</a>
      </div>
    </Col>
    </Row>
    </Grid>
  }
}

render(
  <App />,
  document.getElementById('app')
);
