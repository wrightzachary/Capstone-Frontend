import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const mentalIllness = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
            <h1>Mental Illnesses</h1>
            <p>Mental illness is leading cause of death in veterans on our home front. 
                Please use the dropdown to read about different mental illnesses signs, symptoms, and treatment</p>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default mentalIllness;