import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import ConnectNavigationBar from "../Connect/connectNavBar";
import CommentForm from "../Comment/comment";
import './post.css';

const ViewPost = (props) => {
    const {postContext, dateCreated} = props.currentPost;
    const {postComments, currentUser, currentPost} = props;
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
                        style={{ width: "55rem", margin: "1rem" }}
                        >
                        <Card.Body className="text-center">
                            <Card.Text><h6>{dateCreated}</h6></Card.Text>
                            <Card.Text>{postContext}</Card.Text>
                            <div className="mb-2"></div>
                        </Card.Body>
                        <CommentForm  currentUser={currentUser} currentPost={currentPost} />
                    </Card>
                </Row>
                <Row className="d-flex justify-content-center">
                  <div className="comments">
                  <h1>Comments</h1>
                  </div>
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
                    </Row>
            </Container>
    </React.Fragment>
  );
};

export default ViewPost;

