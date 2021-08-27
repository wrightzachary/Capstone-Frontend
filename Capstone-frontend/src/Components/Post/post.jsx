import React, {useState} from 'react';
import axios from 'axios';
import ConnectNavigationBar from '../Connect/connectNavBar';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ShowAllTopics from '../Topics/topics';

const Post = (props) => {
   
    return ( 
        <React.Fragment>
        <ConnectNavigationBar />
        <Container>
            <Row>
                <Col sm={8}>
                <h1 className="title mb-3">Make A Post</h1>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                <Form>
                    <div>
                    <h5 className="title">Topic</h5>
                        <select>

                        </select>
                    </div>
                    <div>
                        <h5 className="title"> Post</h5>
                        <input className=" form-control"  name="postName" placeholder="Please enter your post..."></input>
                    </div>
                    <div>
                        <h5 className="title">Date</h5>
                        <input className=" form-control" name="date" placeholder ="Please eneter date in format of YYYMMDD"></input>
                    </div>
                    <Button style={{backgroundColor: "crimson", borderColor: "crimson"}} className="mt-2 mb-2" type="submit">Submit Post</Button>
                    </Form>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
        </React.Fragment>
     );
}
 
export default Post;