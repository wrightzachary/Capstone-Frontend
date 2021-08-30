import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import { Col, Container, Row, InputGroup, Card } from "react-bootstrap";
import './mentalIllness.css';

const Anxiety = () => {
    return ( 
        <React.Fragment>
            <MentalIllenesDropdown />
            <Container>
            <Row>
                <Col sm={4}></Col>
                <Col sm={8}></Col>
            </Row>
            </Container><Container fluid>
                <Row className="d-flex justify-content-center">
                        <Card
                        className="card-container border border-primary "
                        style={{ width: "40rem", margin: "1rem" }}
                        >
                        <Card.Body >
                            <Card.Text><h1>Anxiety</h1></Card.Text>
                            <hr></hr>
                            <Card.Text>
                                <h5>Commons symptoms of anxiety include but are not limited to:</h5>
                                    <ul>
                                        <li>Feeling restless, jumpy, or on edge</li>
                                        <li>Excessive worrying about everyday decisions</li>
                                        <li>Difficulty concentrating</li>
                                        <li>A racing heart or cold, clammy hands</li>
                                        <li>Trembling or twitching</li>
                                        <li>Having trouble catching your breath</li>
                                        <li>Feeling dizzy, nauseous, or lightheaded</li>
                                        <li>Difficulty sleeping</li>
                                    </ul>
                            </Card.Text>
                            <div className="mb-2"></div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default Anxiety;