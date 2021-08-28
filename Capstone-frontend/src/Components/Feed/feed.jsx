import React from 'react';
import { Container, Row, Card, Col, Form, InputGroup } from "react-bootstrap";
import ConnectNavigationBar from '../Connect/connectNavBar';

const ShowAllPosts = (props) => {
  const {posts} = props;

  return ( 
        <React.Fragment>
            <ConnectNavigationBar />
            <Container>
            <Row>
                <Col sm={4}>
                <h1>Feed</h1>
                </Col>
                <Col sm={8}></Col>
            </Row>
        </Container>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    {posts.map((post) =>{
                        return (
                            <Card
                            className="card-container border border-primary "
                            style={{ width: "18rem", margin: "1rem" }}
                          >
                            <Card.Body className="text-center">
                              <Card.Text>{post.postContext}</Card.Text>
                              {/* <Link to="/viewTopic">
                              <Button
                                  style={{
                                    backgroundColor: "crimson",
                                    borderColor: "crimson",
                                  }}
                                  onClick={() =>  selectTopic(topic)}> View Topic </Button> 
                              </Link> */}
                            </Card.Body>
                            <InputGroup className="mb-3">
                                {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                                <input
                                placeholder="Comment..."
                                aria-label="Comment..."
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                          </Card>
                        )
                    })}
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default ShowAllPosts;