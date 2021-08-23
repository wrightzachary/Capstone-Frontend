import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const MilitarySexualTrauma = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Military Sexual Trauma</h1>
                <p> MST refers to to sexual harrassment/assault under the SHARP program. 
                    <h5>MST can have cause the following symptoms:</h5>
                    <ul>
                        <li>Disturbing memories to include nightmares</li>
                        <li>Feeling of being unsafe</li>
                        <li>Feeling numb, detatched, or depressed</li>
                        <li>Substancse abuse</li>
                        <li>Isolation</li>
                        <li>Increase of emtoions, anger, irrability</li>
                        <li>Changes in sleep pattern</li>
                        <li>Decrease of physical health</li>
                    </ul>
                </p>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default MilitarySexualTrauma;