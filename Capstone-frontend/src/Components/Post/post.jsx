import React, {useState} from 'react';
import axios from 'axios';
import ConnectNavigationBar from '../Connect/connectNavBar';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Post = (props) => {
    let token = props.token;
    let getPosts = props.getPosts;
    let id = props.currentUser.user.id; 
    if(props.currentUser !== undefined) {
    }

    const initialInput = {
        PostContext: "",
        DateCreated: "",
        UserId: id
    }
    const [eachEntry, setEachEntry] = useState(initialInput)

    const handleChange = (event) => {
        setEachEntry({...eachEntry, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        submitPost();
    }
    const submitPost = async () => {
        let postData = eachEntry
        let intDateCreated = Number(`${postData.DateCreated}`)
        postData.DateCreated = intDateCreated
        postData.UserId = id
        // debugger
            await axios.post("https://localhost:44394/api/post", postData, { headers: {Authorization: 'Bearer ' + token}}).then(res => {
            if(res.data.length !== 0){
                getPosts();
                setEachEntry(initialInput);
                console.log('success');
            }
            })
            .catch(error => {
                if (error){
                    console.log('error');
                    console.log(postData)
                }

            })

        }

   
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
                <Form onSubmit={handleSubmit}>
                    <div>
                        <h5 className="title"> Post</h5>
                        <input className=" form-control" onChange={handleChange}  name="PostContext" placeholder="Please enter your post..."></input>
                    </div>
                    <div>
                        <h5 className="title">Date</h5>
                        <input className=" form-control" onChange={handleChange} name="DateCreated" placeholder ="Please eneter date in format of YYYMMDD"></input>
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