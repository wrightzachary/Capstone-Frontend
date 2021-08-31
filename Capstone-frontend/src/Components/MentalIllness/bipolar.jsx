import React from 'react';
import MentalIllenesDropdown from './mentalIllnessDropdown';
import './mentalIllness.css';
import { Col, Container, Row, Card } from "react-bootstrap";
import Footer from '../Footer/footer';


const Bipolar = () => {
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
                        style={{ width: "30rem", margin: "1rem" }}
                        >
                        <Card.Body>
                            <Card.Text><h1>Bipolar</h1></Card.Text>
                            <hr></hr>
                            <Card.Text>
                            <h5>Manic and hypomanic episodes:</h5>
                            <ul>
                                <li>feelings of extreme energy and increases in mood</li>
                                <li>self-esteem</li>
                                <li>talkativeness</li>
                                <li>activity level</li>
                            </ul>
                            <h5>Episodes of depression </h5>
                            <ul>
                                <li>Feeling sad or depressed</li>
                                <li>Feeling hopeless</li>
                                <li>Concentration issues</li>
                                <li>Changes to appetite or sleep patterns</li>
                                <li>Loss of pleasure in normal activities</li>
                                <li>These periods can last for several weeks</li>
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
 
export default Bipolar;