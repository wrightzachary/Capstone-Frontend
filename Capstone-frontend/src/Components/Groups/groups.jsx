import React from 'react';  
import { Container, Row, Card, Col, Button} from 'react-bootstrap';
import ConnectNavigationBar from '../Connect/connectNavBar';
import { Link } from "react-router-dom";

const ShowAllGroups = (props) => {
    const {allGroups, selectGroup} = props;
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
                              <div className="mb-2"></div>
                              <Link to="/viewGroup">
                                <Button
                                  style={{
                                    backgroundColor: "crimson",
                                    borderColor: "crimson",
                                  }}
                                  onClick={() =>  selectGroup(group)}> View Group </Button> 
                              </Link>
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