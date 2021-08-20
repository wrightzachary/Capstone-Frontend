import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const Schizophernia = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Schizophernia</h1>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default Schizophernia;