import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const PTSD = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>PTSD</h1>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default PTSD;