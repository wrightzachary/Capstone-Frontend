import React from 'react';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './friends.css';




function FriendSuggestions(){
    const people = ["Quinton Glatt", "Jonathan Moon", "Cameron Vaughn", "Michael Lesley"]


    return ( 
        <React.Fragment>
            <Container>
                <Row>
                    <Col sm={8}></Col>
                    <Col sm={4}></Col>
                </Row>
                </Container>
                <Container>
                <Row>
                    <Col sm={4}></Col>
                    <Col sm={4}>
                    <div className="suggested">
                        <h1>Suggested Friends</h1>
                    </div>
                    {people.filter(name => name.includes('t')).map(filteredNames => (
                    <Card
                        className="card-container border border-primary "
                        style={{ display:"flex", width: "21rem", margin: "0rem" }}
                    >
                    <Card.Body className="text-center">
                        <Card.Text>{filteredNames}</Card.Text>
                    </Card.Body>
                    <Button style={{backgroundColor: "red", borderColor: "white"}} className="mt-2 mb-2" type="submit">Connect</Button>
                    </Card>
                    ))}
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default FriendSuggestions;