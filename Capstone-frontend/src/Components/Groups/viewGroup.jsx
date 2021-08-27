import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const ViewGroup = (props) => {
    const {groupName} = props.currentGroup
    const {allGroups, currentGroup} = props;
  const stars = Array(5).fill(0);
  return (
    <React.Fragment>
      <div className="orbit">
      <Container>
        <Row>
        <Col sm={2}></Col>
          <Col className="d-flex justify-content-center" sm={8}>
            <div>
                <h1>{groupName}</h1>
            </div>
          </Col>
          <Col sm={2}></Col>
        </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ViewGroup;