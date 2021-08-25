import React , {useState} from 'react';
import { Button, Offcanvas, Nav } from 'react-bootstrap';



// const ConnectNavigationBar = () => {
  function ConnectNavigationBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <Button variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey="link-1">Profile</Nav.Link>
            <Nav.Link eventKey="link-1">Friends</Nav.Link>
            <Nav.Link eventKey="link-2">Groups</Nav.Link>
            <Nav.Link eventKey="link-2">Topics</Nav.Link>
            <Nav.Link eventKey="link-2">Feed</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    );
  }
  
export default ConnectNavigationBar;