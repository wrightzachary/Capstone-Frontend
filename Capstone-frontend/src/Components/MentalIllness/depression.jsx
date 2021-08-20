import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const Depression = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Depression</h1>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default Depression;