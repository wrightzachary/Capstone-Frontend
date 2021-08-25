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
          <Offcanvas.Title>Connected Veterans Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/groups">Groups</Nav.Link>
            <Nav.Link href="/topics">Topics</Nav.Link>
            <Nav.Link href="/feed">Feed</Nav.Link>
            <Nav.Link href="/friends">Friends</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
    );
  }
  
export default ConnectNavigationBar;