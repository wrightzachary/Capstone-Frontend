import React from 'react';
import { Navbar,Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavigationBar = () => {
  return (
      <React.Fragment>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/helpLine" >Crisis Helpline</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/statistics">Statistics</Nav.Link></Nav.Item>
                    <NavDropdown title="Resources" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/ptsd">Combatting PTSD</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/mentalIllness">Combatting Mental Illness</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/signs">Recognize The Signs</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/helpingYourVeteran">Helping your veteran</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Item><Nav.Link href="/connect">Connect</Nav.Link></Nav.Item>
                </Nav>
                </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
  );
};

export default NavigationBar;