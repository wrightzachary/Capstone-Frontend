import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const MilitarySexualTrauma = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Military Sexual Trauma</h1>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default MilitarySexualTrauma;