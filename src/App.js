import React, { Component } from 'react';
import Begin from './Components/Begin/Begin';
import Destination from './Components/Destination/Destination';
import Return from './Components/Return/Return';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Begin  />
      <Destination />
      <Return />  
      </div>
    );
  }
}

export default App;
