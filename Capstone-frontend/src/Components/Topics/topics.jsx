import React from 'react';  
import { Container, Row, Card, Col } from 'react-bootstrap';
import ConnectNavigationBar from '../Connect/connectNavBar';

const ShowAllTopics = (props) => {
    let allTopics = props.allTopics
    return (
        <React.Fragment>
          <ConnectNavigationBar />
            <Container>
            <Row>
                <Col sm={4}>
                <h1>All Topics</h1>
                </Col>
                <Col sm={8}></Col>
            </Row>
        </Container>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    {allTopics.map((topic) =>{
                        return (
                            <Card
                            className="card-container border border-primary "
                            style={{ width: "18rem", margin: "1rem" }}
                          >
                            <Card.Body className="text-center">
                              <Card.Text>{topic.topicName}</Card.Text>
                              <button>View Topic</button> 
                            </Card.Body>
                          </Card>
                        )
                    })}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ShowAllTopics;