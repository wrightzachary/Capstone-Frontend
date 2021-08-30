import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './Navigation/navigation';
import Home from './Home/home';
import Footer from './Footer/footer';
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
import ShowAllGroups from './Groups/groups';
import ShowAllTopics from './Topics/topics';
import ViewGroup from './Groups/viewGroup';
import ViewTopic from './Topics/viewTopic';
import Post from './Post/post';
import ShowAllPosts from './Feed/feed';
import ViewPost from './Post/viewPost';
import Profile from './Profile/profile';

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [allGroups, setAllGroups] =useState([]);
  const [allTopics, setAllTopics] =useState([]);
  const [token, setToken] = useState();
  const [currentGroup, setCurrentGroup] = useState([]);
  const [currentTopic, setCurrentTopic] = useState([]);
  const [posts, setPosts] =useState([]);
  const [currentPost, setCurrentPost] = useState([]);



  useEffect( () =>{
    const jwt = localStorage.getItem('token');
    createCurrentUser();
    setToken(jwt)
    getAllGroups();
    getAllTopics();
    getPosts();
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

  const getAllGroups = async () => {
    let response = await axios.get("https://localhost:44394/api/group")
    if(response.data.length !== 0){
      setAllGroups(response.data)
      console.log(response.data)
    }
    
  };

  const selectGroup = async (group) => {
    let response = await axios.get(
      `https://localhost:44394/api/group/${group.groupId}`
    );
    let currentGroup = response.data;
    setCurrentGroup(currentGroup);
  };
  
  const getAllTopics = async () => {
    let response = await axios.get("https://localhost:44394/api/topic")
    if(response.data.length !== 0){
      setAllTopics(response.data)
      console.log(response.data)
    }
    
  };

  const selectTopic = async (topic) => {
    let response = await axios.get(
      `https://localhost:44394/api/topic/${topic.topicId}`
    );
    let currentTopic = response.data;
    setCurrentTopic(currentTopic);
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
          <Route path="/profile" exact render={props => <Profile {...props} currentUser={currentUser}/>}  /> 
          <Route path="/Login"  exact render={props => <LoginForm {...props}   setUserToken={setUserToken}  />} />
          <Route path="/register" exact render={props => <Register {...props} />} />
          <Route path="/groups"  render={props => <ShowAllGroups {...props} allGroups={allGroups} selectGroup={selectGroup}/>} /> 
          <Route path="/viewGroup"  render={props => <ViewGroup {...props} currentGroup={currentGroup}/>} /> 
          <Route path="/topics"  render={props => <ShowAllTopics {...props} allTopics={allTopics} selectTopic={selectTopic} />} /> 
          <Route path="/viewTopic"  render={props => <ViewTopic {...props} currentTopic={currentTopic}/>} /> 
          <Route path="/post"  render={props => <Post {...props}  currentUser={currentUser} currentToken={token} />} /> 
          <Route path="/feed"  render={props => <ShowAllPosts {...props}  posts={posts} selectPost={selectPost} />} /> 
          <Route path="/viewPost"  render={props => <ViewPost {...props} currentPost={currentPost}/>} /> 
        </Switch>
        } 
      </Router>
      <Footer />
  </React.Fragment>
  
  );
}

export default App;