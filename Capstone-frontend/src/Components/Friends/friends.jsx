import React from 'react';
import FriendSuggestions from './friendsSuggestions';
import ConnectNavigationBar from '../Connect/connectNavBar';

const Friends = () => {
    return ( 
        <React.Fragment>
            <ConnectNavigationBar />
            <FriendSuggestions />
        </React.Fragment>
     );
}
 
export default Friends;