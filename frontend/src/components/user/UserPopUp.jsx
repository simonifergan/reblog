import React from 'react';
import './UserPopUp.scss';
import { Link } from 'react-router-dom';


const UserPopUp = ({ user, isVisible }) => {
    const popUpStyle = {
        // display: (isVisible) ? 'block' : 'none'
    }
    const thumbnailStyle = {
        backgroundImage: `url('${user.profilePic}')`
    }

    return (
        <div className="user-pop-up" style={popUpStyle}>
            <div className="user-info">
                <Link to={'/user/' + user._id}><h2 title={`Go to ${user.firstname} ${user.lastname}'s profile`}>{user.firstname} {user.lastname}</h2></Link>
                <p>{user.desc}</p>
            </div>
            <Link to={'/user/' + user._id} className="user-thumbnail" style={thumbnailStyle} title={`Go to ${user.firstname} ${user.lastname}'s profile`} />
        </div>
    )
}

export default React.memo(UserPopUp);