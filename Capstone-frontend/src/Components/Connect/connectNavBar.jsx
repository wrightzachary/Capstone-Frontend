import React , {useState} from 'react';
import { Button, Offcanvas, Nav } from 'react-bootstrap';



  function ConnectNavigationBar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <React.Fragment>
      <Button style={{backgroundColor: "red", borderColor: "white"}}variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Connected Veterans Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/post">Make A Post</Nav.Link>
            <Nav.Link href="/feed">Feed</Nav.Link>
            <Nav.Link href="/friends">Friends</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
    );
  }
  
export default ConnectNavigationBar;