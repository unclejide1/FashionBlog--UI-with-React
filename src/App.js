import React from 'react';
import Homepage from './components/Homepage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route> 
        <Route path='/signup'>
          <Signup />
        </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
