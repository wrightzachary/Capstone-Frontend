import React, {useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const CommentForm = (props) => {
    const { currentUser, comments, currentPost} = props;
    console.log(currentPost.postId)
    const token = props.token;
    const getComments = props.getComments;
    const currentPostId = currentPost.postId;
    const id = props.currentUser.user.id; 
    console.log(currentUser.user.username)
    if(props.currentUser !== undefined) {
    }

    const initialInput = {
        CommentContext: "",
        UserId: id,
        PostId: null
    }
    const [eachEntry, setEachEntry] = useState(initialInput)

    const handleChange = (event) => {
        setEachEntry({...eachEntry, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        submitComment();
        console.log(comments)
    }
    const submitComment = async () => {
        let postData = eachEntry
        postData.UserId = id
        postData.PostId = currentPostId
            await axios.post("https://localhost:44394/api/comment", postData, { headers: {Authorization: 'Bearer ' + token}}).then(res => {
            if(res.data.length !== 0){ 
                getComments();
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
            <Container>
                <Row>
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <input className=" form-control" onChange={handleChange}  name="CommentContext" placeholder="Enter your comment..."></input>
                        </div>
                        <Button style={{backgroundColor: "crimson", borderColor: "crimson"}} className="mt-2 mb-2" type="submit">Submit Comment</Button>
                        </Form>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default CommentForm;