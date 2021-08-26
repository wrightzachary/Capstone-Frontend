import React from 'react';  
import { Container, Row, Card, Col } from 'react-bootstrap';
import ConnectNavigationBar from '../Connect/connectNavBar';

const ShowAllGroups = (props) => {
    let allGroups = props.allGroups
    return (
        <React.Fragment>
          <ConnectNavigationBar />
            <Container>
            <Row>
                <Col sm={4}>
                <h1>All Groups</h1>
                </Col>
                <Col sm={8}></Col>
            </Row>
        </Container>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    {allGroups.map((group) =>{
                        return (
                            <Card
                            className="card-container border border-primary "
                            style={{ width: "18rem", margin: "1rem" }}
                          >
                            <Card.Body className="text-center">
                              <Card.Text>{group.groupName}</Card.Text>
                              <button>View Group</button> 
                            </Card.Body>
                          </Card>
                        )
                    })}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default ShowAllGroups;