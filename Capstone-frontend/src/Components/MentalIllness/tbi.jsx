import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const TBI = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Effects of Tramautic Brain Injury</h1>
                <p>
                    A TBI can be a result of any hard impact to an individuals skull
                    <h5>Common symptoms of TBI:</h5>
                    <ul>
                        <li>Headaches</li>
                        <li>Blurred vision</li>
                        <li>Hearing problems</li>
                        <li>Difficulty speaking</li>
                        <li>Dizziness</li>
                        <li>Changes in sense of taste or smell</li>
                        <li>Difficulty concentrating or memory loss</li>
                        <li>Repeating yourself</li>
                        <li>Increased irrebility/frustration</li>
                    </ul>
                </p>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default TBI;