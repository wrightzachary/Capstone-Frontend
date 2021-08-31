import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';
import { Col, Container, Row, InputGroup, Card } from "react-bootstrap";
import Footer from '../Footer/footer';


const MilitarySexualTrauma = () => {
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
                        style={{ width: "30em", margin: "1rem" }}
                        >
                        <Card.Body>
                        <Card.Text>
                            <h1>Military Sexual Trauma</h1>
                            <hr></hr>
                            <h5>MST can have cause the following symptoms:</h5>
                            <ul>
                                <li>Disturbing memories to include nightmares</li>
                                <li>Feeling of being unsafe</li>
                                <li>Feeling numb, detatched, or depressed</li>
                                <li>Substancse abuse</li>
                                <li>Isolation</li>
                                <li>Increase of emtoions, anger, or irrability</li>
                                <li>Changes in sleep pattern</li>
                                <li>Decrease of physical health</li>
                            </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
     );
}
 
export default MilitarySexualTrauma;