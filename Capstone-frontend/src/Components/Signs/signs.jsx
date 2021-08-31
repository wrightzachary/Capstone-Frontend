import React from 'react'; 
import { Col, Container, Row, Card } from "react-bootstrap";
import Footer from '../Footer/footer';


const Signs = () => {
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
                        style={{ width: "35rem", margin: "1rem" }}
                        >
                        <Card.Body>
                            <Card.Text><h1>Seeing The Signs</h1></Card.Text>
                            <hr></hr>
                            <Card.Text>
                                <p>
                                    Regardless if a veteran has known mental illness or not, it is our duty to ensure that we are regualry checking in 
                                    on our fellow veterans and family. Knowing the signs of mental illness can help put an end to veteran suicide. 
                                </p>
                                <h5>We should be doing the following on a regular basis:</h5>
                                <ul>
                                    <li>Reaching out to  our veterans and asking them how they are doing</li>
                                    <li>Wellness checks, actually visiting them or video calling them to ensure that their living arrangement is suitable</li>
                                    <li>Encouring regular doctor visits for check-ups</li>
                                </ul>
                                <h6>
                                    If your veteran, a veteran you know, or yourself is experiencing any signs of mental health illness, plase call visit the 
                                    helping a veteran page to see the steps you need to take.
                                </h6>
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
 
export default Signs;