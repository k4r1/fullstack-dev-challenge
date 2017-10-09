import React, { Component } from 'react'
import './App.css'

import ParametersContainer from '../containers/ParametersContainer'
import ProjectionContainer from '../containers/ProjectionContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-banner">
          <h1 className="fmz-white-font">✨ finimize: Interest Rate Calculator</h1>
        </div>
        <div className="app-body">
          <ParametersContainer />
          <ProjectionContainer />
        </div>
      </div>
    );
  }
}

export default App;
