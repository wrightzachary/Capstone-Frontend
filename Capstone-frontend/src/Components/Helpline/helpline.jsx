import React from 'react';
import './helpline.css';

const Helpline = () => {
    var link = <a href="https://www.va.gov">https://www.va.gov </a>
    return(
        <React.Fragment>
            <div className="help">
                <h1> Crisis Hotline Number:</h1>
                <h1>1-800-273-8255 and press 1</h1>
                <h2>You can also text 838255</h2>
                <h3>If you would like to speak wiht a live represenative by chat or have hearing loss please visit {link}  
                 and click on the red button on the top right</h3>
            </div>
        </React.Fragment>
    )
}

export default Helpline;