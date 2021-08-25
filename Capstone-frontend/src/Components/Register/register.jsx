import React, {useState} from 'react';  
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';


const Register = () => {
    const initialUserInfo = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        phonenumber: ""
    }
    const [eachEntry, setEachEntry] = useState(initialUserInfo)

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp();
        
    }

    const handleChange = (event) => {
        setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
      };

    const signUp = async () => {
        let userData = eachEntry;
        let response = await axios.post("https://localhost:44394/api/authentication", userData);
        console.log(response)
    }
    return (
        
        <Container>
            <Row>
                <Col></Col>
                <Col>
                <div>
                    <h1>Signup</h1>
                    <form onSubmit={handleSubmit}>
                    <input name="firstname" placeholder="First name..." onChange={handleChange}></input>
                    <input  name="lastname" placeholder="Last name..." onChange={handleChange}></input>
                    <input  name="username" placeholder="Username..." onChange={handleChange}></input>
                    <input  name="email" placeholder="Email..." onChange={handleChange}></input>
                    <input  name="password" placeholder="Password..." onChange={handleChange}></input>
                    <input  name="phonenumber" placeholder="Phone number..." onChange={handleChange}></input>
                    <button >Sign Up</button>
                    </form>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Register;