import React from 'react';
import './UserPreview.scss';
import Moment from '../../filters/Moment'

export default ({user, postCreatedAt}) => {
    const style = {
        backgroundImage: `url('${user.profilePic}')`
    }
    return (
        <div className="user-preview">
            <div className="user-profile-pic" style={style} />
            <div className="user-content">
                <h3>{user.firstname} {user.lastname} <span><button>Follow</button></span></h3>
                <h4><Moment>{postCreatedAt}</Moment></h4>
            </div>
        </div>
    )
}