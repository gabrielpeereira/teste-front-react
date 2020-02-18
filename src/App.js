import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './components/UI/Headers'
import Inputs from './components/UI/Inputs'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Fragment>
          <Header />
          <div className="container">
            <Inputs />
          </div>
        </Fragment>
      </div>
    )
  }

}


export default App;
