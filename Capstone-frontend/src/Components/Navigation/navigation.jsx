import React from 'react';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap';
import './navigation.css';


const NavigationBar = () => {
  return (
      <React.Fragment>
          <Navbar className="nav-color" sticky="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" >
                    <Nav.Link className="customNavLink"  href="/" >Home</Nav.Link>
                    <Nav.Link className="customNavLink"  href="/helpline" >Crisis Helpline</Nav.Link>
                    <Nav.Link className="customNavLink"  href="/statistics">Statistics</Nav.Link>
                    <Nav.Link className="customNavLink"  href="/findFacility">Find A VA Facility</Nav.Link>
                    <NavDropdown title="Resources" id="basic-nav-dropdown">
                        <NavDropdown.Item className="customNavLink"  href="/mentalIllnessHome">Combatting Mental Illness</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item  className="customNavLink"  href="/signs">Recognize The Signs</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="customNavLink" href="/helpingYourVeteran">Helping your veteran</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link className="customNavLink" href="/login">Connect</Nav.Link>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
  );
};

export default NavigationBar;