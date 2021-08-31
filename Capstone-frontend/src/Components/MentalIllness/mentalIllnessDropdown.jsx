import React from 'react';
import {Dropdown} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import Footer from '../Footer/footer';


const MentalIllenesDropdown = () => {
    return (  
        <React.Fragment>
            <DropdownButton variant="danger" id="dropdown-item-button" title="Please Select A Mental Illness To Read About...">
                <Dropdown.Item href="/mentalIllnessHome">Mental Illness Home</Dropdown.Item>
                <Dropdown.Item href="/anxiety">Anxiety</Dropdown.Item>
                <Dropdown.Item href="/bipolar">Bipolar</Dropdown.Item>
                <Dropdown.Item href="/depression">Depression</Dropdown.Item>
                <Dropdown.Item href="/tbi">Effects of TBI</Dropdown.Item>
                <Dropdown.Item href="/mst">Military Sexual Trauma</Dropdown.Item>
                <Dropdown.Item href="/ptsd">PTSD</Dropdown.Item>
                <Dropdown.Item href="/schizophernia">Schizophrenia</Dropdown.Item>
            </DropdownButton>
            <Footer />
        </React.Fragment>
    );
}
 
export default MentalIllenesDropdown;
