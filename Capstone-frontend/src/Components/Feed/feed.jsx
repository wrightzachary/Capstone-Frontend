import React from 'react';
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ConnectNavigationBar from '../Connect/connectNavBar';

const ShowAllPosts = (props) => {
  const {posts, selectPost} = props;
  const {postContext, dateCreated} = props.currentPost;
  const {currentUser} = props;
  return ( 
        <React.Fragment>
            <ConnectNavigationBar />
            <Container>
            <Row>
                <Col sm={8}>
                  <div className="feed">
                    <h1>{currentUser.user.username}'s News Feed</h1>
                  </div>
                </Col>
            </Row>
        </Container>
            <Container fluid>
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                    {posts.map((post) =>{
                        return (
                            <Card
                            className="card-container border border-primary "
                            style={{ display:"flex", width: "40rem", margin: "0rem" }}
                          >
                            <Card.Body className="text-center">
                            <Card.Text><h1>{post.user}</h1></Card.Text>
                            <Card.Text><h6>{post.dateCreated}</h6></Card.Text>
                              <Card.Text>{post.postContext}</Card.Text>
                              <Link to="/viewPost">
                              <Button
                                  style={{
                                    backgroundColor: "crimson",
                                    borderColor: "crimson",
                                  }}
                                  onClick={() =>  selectPost(post)}>View Post </Button> 
                              </Link>
                            </Card.Body>
                          </Card>
                        )
                    })}
                    </Col>
                    </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default ShowAllPosts;