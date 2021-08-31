import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';
import { Col, Container, Row, InputGroup, Card } from "react-bootstrap";
import Footer from '../Footer/footer';


const Schizophernia = () => {
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
                        style={{ width: "40em", margin: "1rem" }}
                        >
                        <Card.Body>
                        <Card.Text>
                            <h1>Schizophernia</h1>
                            <hr></hr>
                            <h5>Common symptoms can include:</h5>
                            <ul>
                                <li> Hallucinations</li>
                                <li>Delusions like being watched or followed</li>
                                <li>CLouded thoughts</li>
                                <li>Changes to feelings and behaviors</li>
                                <li>Difficulty expressing positive emotions due to lack of feeling those emotions</li>
                                <li>Reduced emotional expression</li>
                                <li>Difficulty with everyday activities and maintaingin personal relationships</li>
                                <li>Trouble with concentratio</li>
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
 
export default Schizophernia;