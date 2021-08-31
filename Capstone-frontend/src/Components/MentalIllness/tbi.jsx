import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';
import { Col, Container, Row, Card } from "react-bootstrap";
import Footer from '../Footer/footer';

const TBI = () => {
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
                        <Card.Body>
                        <Card.Text>
                            <h1>Effects of Tramautic Brain Injury</h1>
                            <hr></hr>
                            <h5>Common symptoms of TBI:</h5>
                            <ul>
                                <li>Headaches</li>
                                <li>Blurred vision</li>
                                <li>Hearing problems</li>
                                <li>Difficulty speaking</li>
                                <li>Dizziness</li>
                                <li>Changes in sense of taste or smell</li>
                                <li>Difficulty concentrating or memory loss</li>
                                <li>Repeating yourself</li>
                                <li>Increased irrebility/frustration</li>
                            </ul>
                            </Card.Text>
                            <div className="mb-2"></div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
     );
}
 
export default TBI;