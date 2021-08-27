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
        branchServed: "",
        currentLocation: "",
        dutyStation: "",
        unit: "",
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
        window.location.href="/login"

    }
    return (
        
        <Container>
            <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
                <div>
                    <h1>Signup</h1>
                        <form onSubmit={handleSubmit}>
                        <input name="firstname" placeholder="First name..." onChange={handleChange}></input>
                        <input  name="lastname" placeholder="Last name..." onChange={handleChange}></input>
                        <input  name="username" placeholder="Username..." onChange={handleChange}></input>
                        <input  name="email" placeholder="Email..." onChange={handleChange}></input>
                        <input  name="password" placeholder="Password..." onChange={handleChange}></input>
                        <input  name="dutyStation" placeholder="Duty station served at..." onChange={handleChange}></input>
                        <input  name="unit" placeholder=" Unit where you served..." onChange={handleChange}></input>
                        <input  name="branchServed" placeholder="Branch served..." onChange={handleChange}></input>
                        <input  name="currentLocation" placeholder="Current location?" onChange={handleChange}></input>
                        <button style={{backgroundColor: "crimson", borderColor: "crimson"}} className="mt-2 mb-2">Sign Up</button>
                    </form>
                    </div>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    )
}

export default Register;