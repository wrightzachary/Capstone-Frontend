import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';

const Bipolar = () => {
    return ( 
        <React.Fragment>
            <div className="mentalHeading">
                <h1>Bipolar</h1>
                <p>
                    <h5>Manic and hypomanic episodes:</h5>
                    <ul>
                        <li>feelings of extreme energy and increases in mood</li>
                        <li>self-esteem</li>
                        <li>talkativeness</li>
                        <li>activity level</li>
                    </ul>
                    <p>
                        Those that may be in a manic episode may also have very little need for sleep, increased irrebility, and racing thoughts. 
                        Episodes last for several days at a time
                    </p>
                    <h5>Episodes of depression </h5>
                    <ul>
                        <li>Feeling sad or depressed</li>
                        <li>Feeling hopeless</li>
                        <li>Concentration issues</li>
                        <li>Changes to appetite or sleep patterns</li>
                        <li>Loss of pleasure in normal activities</li>
                        <p>These periods can last for several weeks</p>
                    </ul>
                </p>
            </div>
            <MentalIllenesDropdown />
        </React.Fragment>
     );
}
 
export default Bipolar;