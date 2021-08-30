import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';
import { Col, Container, Row, InputGroup, Card } from "react-bootstrap";


const mentalIllness = () => {
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
                        style={{ width: "35rem", margin: "1rem" }}
                        >
                        <Card.Body>
                            <Card.Text><h1>Mental Illnesses</h1></Card.Text>
                            <hr></hr>
                            <Card.Text>
                            <p>Mental illness is one of the leading causes of death in veterans on our home front. 
                                Please use the dropdown to read about different mental illnesses signs, and
                                symptoms.
                            </p>
                            <h5>How to cope:</h5>
                            <ul>
                                <li>Seek help from a medical professional</li>
                                <li>Persue normal activities to avoid greater disruption in emotions</li>
                                <li>If your life or someone else's life is in danger call helpline</li>
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
 
export default mentalIllness;