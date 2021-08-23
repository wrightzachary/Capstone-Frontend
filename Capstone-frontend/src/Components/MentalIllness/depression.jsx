import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const Depression = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Depression</h1>
                <p>
                    <h5>Common symptons and signs of depression:</h5>
                    <ul>
                      <li>Feeling sad or hopeless</li>
                      <li>Losing interest in previously normal daily activities</li>
                      <li>Gain/Loss of weight</li>
                      <li>Sleeping pattern is not normal</li>
                      <li>Feeling of low enegery</li>
                      <li>Adjusted appetite</li>
                    </ul>
                </p>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default Depression;