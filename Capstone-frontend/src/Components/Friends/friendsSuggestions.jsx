import React, {useState} from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './friends.css';




function FriendSuggestions(props){
  const [suggestedFriends, setSuggestedFriends] = useState([]);
  const {currentUser} = props;
  const {users} = props
    console.log(users);
    console.log(currentUser)
  useEffect(() =>{
    getCurrentUserData();
  },[users])
  

  const getCurrentUserData = () => {
      const userData = users.filter((user) =>
        user.id.includes(currentUser.user.id)
      )
      getSuggestedFriends(userData[0]);
      console.log(userData)
    
}
  const getSuggestedFriends = (userData) =>{
    let friends = users.filter((user) => {
        if (user.branchServed === userData.branchServed || user.currentLocation === userData.currentLocation 
            || user.unit === userData.unit || user.dutyStation === userData.dutyStation ) {
          return true
        }    
      }
      )
      setSuggestedFriends(friends)
      console.log(friends) 
      console.log(users)

  }
  return ( 
        <React.Fragment>
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
                    <div className="suggested">
                        <h1>Suggested Friends</h1>
                    </div>
                    {suggestedFriends.map(user => (
                    <Card
                        className="card-container border border-primary "
                        style={{ display:"flex", width: "21rem", margin: "0rem" }}
                    >
                    <Card.Body className="text-center">
                        <Card.Text>{user.firstName}</Card.Text>
                    </Card.Body>
                    <Button style={{backgroundColor: "red", borderColor: "white"}} className="mt-2 mb-2" type="submit">Connect</Button>
                    </Card>
                    ))}
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        </React.Fragment>
     );
}
 
export default FriendSuggestions;