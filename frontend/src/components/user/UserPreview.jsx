import React from 'react';
import './UserPreview.scss';

export default ({user}) => {
    return (
        <div className="user-preview">
            <img src={user.profilePic} alt=""/>
        </div>
    )
}