import React from 'react';
import './helpline.css';
import { Col, Container, Row, Card } from "react-bootstrap";
import Footer from '../Footer/footer';


const Helpline = () => {
    var link = <a href="https://www.va.gov">https://www.va.gov </a>
    return(
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
                        style={{ width: "35rem", margin: "1rem" }}
                        >
                        <Card.Body>
                            <Card.Text><h1> Crisis Hotline Number:</h1></Card.Text>
                            <hr></hr>
                            <Card.Text>
                            <h1>1-800-273-8255 and press 1</h1>
                            <h2>You can also text 838255</h2>
                            <h3>If you would like to speak wiht a live represenative by chat or have hearing loss please visit {link}  
                            and click on the red button on the top right.</h3>
                            </Card.Text>
                            <div className="mb-2"></div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default Helpline;