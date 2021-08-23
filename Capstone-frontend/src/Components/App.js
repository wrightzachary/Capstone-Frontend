import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './Navigation/navigation';
import Home from './Home/home';
import Footer from './Footer/footer';
import Helpline from './Helpline/helpline';
import MentalIllness from './MentalIllness/mentalIllnessHome';
import Anxiety from './MentalIllness/anxiety';
import Bipolar from './MentalIllness/bipolar';
import Depression from './MentalIllness/depression';
import TBI from './MentalIllness/tbi';
import MilitarySexualTrauma from './MentalIllness/mst';
import PTSD from './MentalIllness/ptsd';
import Schizophernia from './MentalIllness/schizophrenia';
import Signs from './Signs/signs';
import HelpingVeterans from './HelpingVeterans/helpingVeterans';
import FindAFacility from './FindAFacility/findAFacility';


function App() {
  return (

    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
        <Route path="/" exact render={props => <Home {...props} />} /> 
        <Route path="/helpline" exact render={props => <Helpline {...props} />} /> 
        <Route path="/mentalIllnessHome" exact render={props => <MentalIllness {...props} />} /> 
        <Route path="/anxiety" exact render={props => <Anxiety {...props} />} /> 
        <Route path="/bipolar" exact render={props => <Bipolar {...props} />} /> 
        <Route path="/depression" exact render={props => <Depression {...props} />} /> 
        <Route path="/tbi" exact render={props => <TBI {...props} />} /> 
        <Route path="/mst" exact render={props => <MilitarySexualTrauma {...props} />} /> 
        <Route path="/ptsd" exact render={props => <PTSD {...props} />} /> 
        <Route path="/schizophernia" exact render={props => <Schizophernia {...props} />} /> 
        <Route path="/signs" exact render={props => <Signs {...props} />} /> 
        <Route path="/helpingYourVeteran" exact render={props => <HelpingVeterans {...props} />} /> 
        <Route path="/findFacility" exact render={props => <FindAFacility {...props} />} /> 
        </Switch>
      </Router>
      <Footer />
  </React.Fragment>
  
  );
}

export default App;