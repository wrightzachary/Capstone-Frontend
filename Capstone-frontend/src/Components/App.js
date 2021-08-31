import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './Navigation/navigation';
import Home from './Home/home';
import Helpline from './Helpline/helpline';
import MentalIllness from './MentalIllness/mentalIllnessHome';
import Anxiety from './MentalIllness/anxiety';
import Bipolar from './MentalIllness/bipolar';
import Depression from './MentalIllness/depression';
import TBI from './MentalIllness/tbi';
import MilitarySexualTrauma from './MentalIllness/mst';
import PTSD from './MentalIllness/ptsd';
import Schizophernia from './MentalIllness/schizophrenia';
import Signs from './Signs/signs';
import HelpingVeterans from './HelpingVeterans/helpingVeterans';
import FindAFacility from './FindAFacility/findAFacility';
import Statistics from './Statistics/statistics';
import ConnectHome from './Connect/connectHome';
import LoginForm from './Login/login';
import Register from './Register/register';
import jwtDecode from 'jwt-decode';
import Post from './Post/post';
import ShowAllPosts from './Feed/feed';
import ViewPost from './Post/viewPost';

function App() {
  const [currentUser, setCurrentUser] = useState();
  // const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();
  const [posts, setPosts] =useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  // const [comments, setComments] = useState([]);
  const [postComments, setPostComments] = useState([]);



  useEffect( () =>{
    const jwt = localStorage.getItem('token');
    createCurrentUser();
    setToken(jwt)
    getUsers();
    getPosts();
    getComments();
    try{
      const user = jwtDecode(jwt);
      setCurrentUser({user})
      setLoading(false);
    }
    catch {
      setLoading(false);
    }
  }, [])


  const setUserToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    const user = jwtDecode(token);
    setCurrentUser(user);
    setLoading(false);
    console.log(user);
    window.location = "/";
  };

  const createCurrentUser = (user) => {
    setCurrentUser(user);
  };

  const getUsers = async () => {
    let response = await axios.get("https://localhost:44394/api/user")
    if(response.data.length !== 0){
      // setUsers(response.data)
      console.log(response.data)
    }
    
  };


  const getPosts = async () => {
    let response = await axios.get("https://localhost:44394/api/post")
    if(response.data.length !== 0){
      setPosts(response.data)
      console.log(response.data)
    }
  };

  const selectPost = async (post) => {
    let response = await axios.get(
      `https://localhost:44394/api/post/${post.postId}`
    );
    let currentPost = response.data;
    setCurrentPost(currentPost);
    console.log(post)
    getPostComment(post.postId);

  };

  const getComments = async () => {
    let response = await axios.get("https://localhost:44394/api/comment")
    if(response.data.length !== 0){
      // setComments(response.data)
      console.log(response.data)
    }
  };

  const getPostComment = async (postId) => {
    let response = await axios.get(
      `https://localhost:44394/api/comment/${postId}`
    );
    setPostComments(response.data);
    console.log(response.data)
  };

  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        {!loading &&
        
        <Switch>
          <Route path="/" exact render={props => <Home {...props} />} /> 
          <Route path="/helpline" exact render={props => <Helpline {...props} />} /> 
          <Route path="/mentalIllnessHome" exact render={props => <MentalIllness {...props} />} /> 
          <Route path="/anxiety" exact render={props => <Anxiety {...props} />} /> 
          <Route path="/bipolar" exact render={props => <Bipolar {...props} />} /> 
          <Route path="/depression" exact render={props => <Depression {...props} />} /> 
          <Route path="/tbi" exact render={props => <TBI {...props} />} /> 
          <Route path="/mst" exact render={props => <MilitarySexualTrauma {...props} />} /> 
          <Route path="/ptsd" exact render={props => <PTSD {...props} />} /> 
          <Route path="/schizophernia" exact render={props => <Schizophernia {...props} />} /> 
          <Route path="/signs" exact render={props => <Signs {...props} />} /> 
          <Route path="/helpingYourVeteran" exact render={props => <HelpingVeterans {...props} />} /> 
          <Route path="/findFacility" exact render={props => <FindAFacility {...props} />} /> 
          <Route path="/statistics" exact render={props => <Statistics {...props} />} /> 
          <Route path="/connect" exact render={props => <ConnectHome {...props} currentUser={currentUser} posts={posts} />}  /> 
          <Route path="/Login"  exact render={props => <LoginForm {...props}   setUserToken={setUserToken}  />} />
          <Route path="/register" exact render={props => <Register {...props} />} />
          <Route path="/post"  render={props => <Post {...props}  currentUser={currentUser} currentToken={token} />} /> 
          <Route path="/feed"  render={props => <ShowAllPosts {...props}  posts={posts} selectPost={selectPost} currentUser={currentUser}
          currentPost={currentPost} />} /> 
          <Route path="/viewPost"  render={props => <ViewPost {...props} 
          currentUser={currentUser}
          currentPost={currentPost}
           getComments={getComments}
            postComments={postComments}
             />} /> 
        </Switch>
        } 
      </Router>
  </React.Fragment>
  
  );
}

export default App;