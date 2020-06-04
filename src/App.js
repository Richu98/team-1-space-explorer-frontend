import React, { Component } from 'react';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import Begin from './Components/Begin/Begin';
import Destination from './Components/Destination/Destination';
import Return from './Components/Return/Return';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Begin />  
          <Switch>
            <Route exact path="./" Component={Begin}/>
            <Route  path="./destination" Component={Destination}/>
            <Route  path="./return" Component={Return}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
