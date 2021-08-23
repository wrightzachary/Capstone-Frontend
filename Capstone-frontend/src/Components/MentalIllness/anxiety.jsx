import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const Anxiety = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Anxiety</h1>
                <p>
                    <h5>Commons symptoms of anxiety include but are not limited to:</h5>
                    <ul>
                        <li>Feeling restless, jumpy, or on edge</li>
                        <li>Excessive worrying about everyday decisions</li>
                        <li>Difficulty concentrating</li>
                        <li>A racing heart or cold, clammy hands</li>
                        <li>Trembling or twitching</li>
                        <li>Having trouble catching your breath</li>
                        <li>Feeling dizzy, nauseous, or lightheaded</li>
                        <li>Difficulty sleeping</li>
                    </ul>
                </p>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default Anxiety;