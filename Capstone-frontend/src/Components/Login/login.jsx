import React, { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Button } from 'react-bootstrap';


const LoginForm = (props) => {
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
    props.setUserToken(response.data.token)
    if (response.data.length !== 0){
        console.log("hello");
        window.location.href="/connect"
    }
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
                      <button>Login</button>
                      </form>
                      </div>
                  </Col>
                  <Col></Col>
              </Row>
          </Container>
     );
  }
   
  export default LoginForm;