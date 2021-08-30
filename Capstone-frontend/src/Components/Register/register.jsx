import React, {useState} from 'react';  
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';


const Register = () => {
    const initialUserInfo = {
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password: "",
        BranchServed: "",
        CurrentLocation: "",
        DutyStation: "",
        Unit: "",
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
                    <h1>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <input name="FirstName" placeholder="First name..." onChange={handleChange}></input>
                            <input  name="LastName" placeholder="Last name..." onChange={handleChange}></input>
                            <input  name="UserName" placeholder="Username..." onChange={handleChange}></input>
                            <input  name="Email" placeholder="Email..." onChange={handleChange}></input>
                            <input  name="Password" placeholder="Password..." onChange={handleChange}></input>
                            <input  name="BranchServed" placeholder="Branch served..." onChange={handleChange}></input>
                            <input  name="CurrentLocation" placeholder="Current location?" onChange={handleChange}></input>
                            <input  name="DutyStation" placeholder="Duty station served at..." onChange={handleChange}></input>
                            <input  name="Unit" placeholder=" Unit where you served..." onChange={handleChange}></input>
                            <br></br>
                            <button style={{backgroundColor: "crimson", borderColor: "crimson", color: "white"}} className="mt-2 mb-2">Register</button>
                        </form>

                        </div>
                </Col>
                <Col sm={4}></Col>
            </Row>
        </Container>
    )
}

export default Register;