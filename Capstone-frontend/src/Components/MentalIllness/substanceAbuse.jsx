import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const SubstanceAbuse = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Substance Abuse</h1>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default SubstanceAbuse;