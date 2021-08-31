import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';
import { Col, Container, Row, Card } from "react-bootstrap";
import Footer from '../Footer/footer';


const Depression = () => {
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
                        <Card.Text>
                            <h1>Depression</h1>
                            <hr></hr>
                            <h5>Common symptons and signs of depression:</h5>
                            <ul>
                                <li>Feeling sad or hopeless</li>
                                <li>Losing interest in previously normal daily activities</li>
                                <li>Gain/Loss of weight</li>
                                <li>Sleeping pattern is not normal</li>
                                <li>Feeling of low enegery</li>
                                <li>Adjusted appetite</li>
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
 
export default Depression;