import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const PTSD = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Post Traumatic Stress Disorder</h1>
                <p>
                    <h5>Common symptoms of PTSD include: </h5>
                    <ul>
                        <li>Withdrawl of personal life</li>
                        <li>Disturbing memories or nightmares</li>
                        <li>Concentration issues</li>
                        <li>Being stratled easily</li>
                        <li>Anxiety</li>
                        <li>Feeling drained or tired all the time</li>
                        <li>Loss of pleasure in activities</li>
                        <li>Substance abuse</li>
                    </ul>
                </p>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default PTSD;