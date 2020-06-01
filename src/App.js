import React, { Component } from 'react';
import Begin from './Components/Begin/Begin';
import TeamInfo from './Components/TeamInfo/TeamInfo'



class App extends Component {

  render() {
    return (
      <div className="App">
      <Begin  />
      <TeamInfo   />
      </div>
    );
  }
}

export default App;
