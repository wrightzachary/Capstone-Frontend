import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const TBI = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Effects of TBI</h1>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default TBI;