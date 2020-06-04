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
          <Switch>
            <Route exact path="/" component={Begin}/>
            <Route path="/Destination" component={Destination}/>
            <Route path="/return" component={Return}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
