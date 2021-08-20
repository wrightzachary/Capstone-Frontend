import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './Navigation/navigation';
import Home from './Home/home';
import Footer from './Footer/footer';

function App() {
  return (

    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Home {...props} />} /> 
        </Switch>
      </Router>
      <Footer />
  </React.Fragment>
  
  );
}

export default App;