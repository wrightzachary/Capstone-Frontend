import React from 'react';
import FriendSuggestions from './friendsSuggestions';
import ConnectNavigationBar from '../Connect/connectNavBar';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

function Friends({users, currentUser}) {
    const friends = ["Zidan Hunter", "Iwan Hess", "Cameron Ridley", "Zak Villarreal"]

    return ( 
        <React.Fragment>
            <ConnectNavigationBar />
            <Container>
                    <Row>
                        <Col sm={8}></Col>
                        <Col sm={4}></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={4}>
                            <div className="friends">
                                <h1 className="title mb-3">Friends</h1>
                            </div>
                            {friends.map((friendsList) => (
                            <Card
                                className="card-container border border-primary "
                                style={{ display:"flex", width: "21rem", margin: "0rem" }}
                            >
                            <Card.Body className="text-center">
                                <Card.Text>{friendsList}</Card.Text>
                            </Card.Body>
                            </Card>
                            ))}
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Container>
            <FriendSuggestions users={users} currentUser={currentUser}/>
        </React.Fragment>
     );
}
 
export default Friends;