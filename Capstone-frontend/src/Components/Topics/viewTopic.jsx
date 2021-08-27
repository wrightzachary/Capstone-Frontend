import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const ViewTopic = (props) => {
    const {topicName} = props.currentTopic
    const {allTopics, currentTopic} = props;
  return (
    <React.Fragment>
      <div className="orbit">
      <Container>
        <Row>
        <Col sm={2}></Col>
          <Col className="d-flex justify-content-center" sm={8}>
            <div>
                <h1>{topicName}</h1>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ViewTopic;