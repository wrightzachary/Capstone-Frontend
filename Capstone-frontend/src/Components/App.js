import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './Navigation/navigation';
import Home from './Home/home';

function App() {
  return (

    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Home {...props} />} /> 
        </Switch>
      </Router>
  </React.Fragment>
  
  );
}

export default App;