import React from 'react';
import './UserPreview.scss';

import Moment from '../../filters/Moment'
import FollowButton from '../buttons/FollowButton';

export default ({ user, postCreatedAt }) => {
    const style = {
        backgroundImage: `url('${user.profilePic}')`
    }
    const bottomContent = (postCreatedAt)
        ? <Moment writtenAt>{postCreatedAt}</Moment>
        : <span>{user.desc}</span>

    const clickHandler = () => {
        console.log('I am working');
    }
    return (
        <div className="user-preview">
            <div className="user-profile-pic" style={style} />
            <div className="user-content">
                <h3>{user.firstname} {user.lastname} <span><FollowButton clickHandler={clickHandler}></FollowButton></span></h3>
                <h4>{bottomContent}</h4>
            </div>
        </div>
    )
}