import React from 'react';
import ConnectNavigationBar from '../Connect/connectNavBar';

const Profile = (props) => {
    const {currentUser} = props;
    return ( 
        <React.Fragment>
            <ConnectNavigationBar />
            <h1>{currentUser.username}</h1>
        </React.Fragment>
     );
}
 
export default Profile;