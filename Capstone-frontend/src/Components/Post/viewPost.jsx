import React from "react";
import { Col, Container, Row, InputGroup, Card } from "react-bootstrap";
import ConnectNavigationBar from "../Connect/connectNavBar";

const ViewPost = (props) => {
    const {postContext} = props.currentPost;
    const {postComments} = props;
  return (
    <React.Fragment>
        <ConnectNavigationBar />
        <Container>
            <Row>
                <Col sm={4}></Col>
                <Col sm={8}></Col>
            </Row>
            </Container>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                        <Card
                        className="card-container border border-primary "
                        style={{ width: "18rem", margin: "1rem" }}
                        >
                        <Card.Body className="text-center">
                            <Card.Text>{postContext}</Card.Text>
                            <div className="mb-2"></div>
                            <InputGroup className="mb-3">
                                {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
                                <input
                                placeholder="Comment..."
                                aria-label="Comment..."
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Card.Body>
                    </Card>
                </Row>
                {postComments.map((comment) =>{
                        return (
                            <Card
                            className="card-container border border-primary "
                            style={{ display:"flex", width: "18rem", margin: "0rem" }}
                          >
                            <Card.Body className="text-center">
                              <Card.Text>{comment.commentContext}</Card.Text>
                            </Card.Body>
                          </Card>
                        )
                    })}
            </Container>
    </React.Fragment>
  );
};

export default ViewPost;

