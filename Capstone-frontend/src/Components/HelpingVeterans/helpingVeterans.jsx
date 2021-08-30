import React from 'react';
import { Col, Container, Row, InputGroup, Card } from "react-bootstrap";

const HelpingVeterans = () => {
    return ( 
        <React.Fragment>
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
                        <Card.Body>
                            <Card.Text><h1>Helping A Veteran</h1></Card.Text>
                            <hr></hr>
                            <Card.Text>
                            <h5>Ask if the veteran is thinking of hurting themself or anyone else. Be blunt and do not beat around the bush with this question.</h5>
                            <h5>If the veteran is homicidal or suicidal:</h5>
                            <ul>
                                <li>Keep them on the phone with consitent conversation to ensure they are responding or in your sight </li>
                                <li>Call crisis helpline</li>
                            </ul>
                            <h5>If veteran is not homicidal or suicidal:</h5>
                            <ul>
                                <li>Urge them to go get seen by VA or their primary care doctor</li>
                                <li>Offer support and even offer to take and accompany them to seek help</li>
                                <li>If any doubt about the mental state of the veteran call the crisis helpline or stay with them in close contact until they get the correct help</li>
                            </ul>
                            <h3>Remeber to stay calm</h3>
                            </Card.Text>
                            <div className="mb-2"></div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default HelpingVeterans;