import React, { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


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
    await axios.post("https://localhost:44394/api/authentication/login", userData) .then((response) => {
    if (response.data.length !== 0){
      props.setUserToken(response.data.token)
        console.log("hello");
        window.location.href="/connect"
    }
    }).catch ((error) => {
        if (error){
          console.log(error)
        }
    })
    
  }
    
    
    return ( 
      <Container>
              <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                  <div>
                      <h1>Login</h1>
                      <form onSubmit={handleSubmit}>
                      <input name="username" placeholder="Username..." onChange={handleChange}></input>
                      <input  name="password" placeholder="Password..." onChange={handleChange}></input>

                      <Button style={{backgroundColor: "crimson", borderColor: "crimson"}} className="mt-2 mb-2" type="submit" >Login</Button> 
                      <Link to="/register">
                      <Button style={{backgroundColor: "crimson", borderColor: "crimson"}} className="mt-2 mb-2" href="/register">Register</Button>
                      </Link>
                      </form>
                      </div>
                  </Col>
                  <Col sm={4}></Col>
              </Row>
          </Container>
     );
  }
   
  export default LoginForm;