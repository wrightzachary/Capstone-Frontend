import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const Anxiety = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Anxiety</h1>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default Anxiety;