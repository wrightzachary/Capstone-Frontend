import React from "react";
import { Col, Container, Row, InputGroup } from "react-bootstrap";

const ViewPost = (props) => {
    const {postContext} = props.currentPost
  return (
    <React.Fragment>
      <div className="orbit">
      <Container>
        <Row>
        <Col sm={2}></Col>
          <Col className="d-flex justify-content-center" sm={4}>
            <div>
                <h1>{postContext}</h1>
            </div>
            </Col>
            <Col className="commentbar" sm={4}>
          <InputGroup className="mb-3">
            {/* <InputGroup.Text id="basic-addon1"></InputGroup.Text> */}
            <input
            placeholder="Comment..."
            aria-label="Comment..."
            aria-describedby="basic-addon1"
            />
            </InputGroup>
          </Col>
          <Col sm={2}></Col>
        </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ViewPost;