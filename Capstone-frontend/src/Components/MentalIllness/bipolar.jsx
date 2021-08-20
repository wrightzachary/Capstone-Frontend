import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const Bipolar = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Bipolar</h1>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default Bipolar;