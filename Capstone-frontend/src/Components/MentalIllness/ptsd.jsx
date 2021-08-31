import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';
import { Col, Container, Row, Card } from "react-bootstrap";
import Footer from '../Footer/footer';


const PTSD = () => {
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
                            <h1>Post Traumatic Stress Disorder</h1>
                            <hr></hr>
                            <h5>Common symptoms of PTSD include: </h5>
                            <ul>
                                <li>Withdrawl of personal life</li>
                                <li>Disturbing memories or nightmares</li>
                                <li>Concentration issues</li>
                                <li>Being stratled easily</li>
                                <li>Anxiety</li>
                                <li>Feeling drained or tired all the time</li>
                                <li>Loss of pleasure in activities</li>
                                <li>Substance abuse</li>
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
 
export default PTSD;