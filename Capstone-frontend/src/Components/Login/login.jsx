import React, { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';

const LoginForm = () => {
  const logInValues = {
    username: "",
    password: ""
}
  const [logInInfo, setLogInInfo] = useState(logInValues);
  

const handleChange = (event) => {
  setLogInInfo({ ...logInInfo, [event.target.name]: event.target.value });
}
const handleSubmit = (event) => {
  event.preventDefault();
  logIn();
}

const logIn = async () => {
  let userData = logInInfo;
  let response = await axios.post("https://localhost:44394/api/authentication/login", userData);
  console.log(response)
}
  
  
  return ( 
    <Container>
            <Row>
                <Col></Col>
                <Col>
                <div>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                    <input name="username" placeholder="Username..." onChange={handleChange}></input>
                    <input  name="password" placeholder="Password..." onChange={handleChange}></input>
                    <button >Sign Up</button>
                    </form>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container>
   );
}
 
export default LoginForm;