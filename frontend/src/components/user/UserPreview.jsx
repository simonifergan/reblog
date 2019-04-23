import React from 'react';
import './UserPreview.scss';
import { Link } from 'react-router-dom';

import Moment from '../../filters/Moment'
import FollowButton from '../buttons/FollowButton';

export default ({ user, postCreatedAt, followUser }) => {

    const style = {
        backgroundImage: `url('${user.profilePic}')`
    }
    const bottomContent = (postCreatedAt)
        ? <Moment writtenAt>{postCreatedAt}</Moment>
        : <span>{user.desc}</span>

    const userName = (postCreatedAt)
        ? <Link
            className="user-name"
            title={`Go to ${user.firstname}'s profile`}
            to={'/user/' + user._id}
        >
            {user.firstname} {user.lastname}
        </Link>
        : <span>{user.firstname} {user.lastname}</span>

    const userPicture = (postCreatedAt)
        ? <Link
            className="user-name"
            title={`Go to ${user.firstname}'s profile`}
            to={'/user/' + user._id}
        >
            <div className="user-profile-pic" style={style} />
        </Link>
        : <div className="user-profile-pic" style={style} />

    return (
        <div className="user-preview">
            {userPicture}
            <div className="user-content">
                <h3>
                    {userName}
                    &nbsp;
                    <FollowButton firstname={user.firstname} clickHandler={followUser}></FollowButton></h3>
                <h4>{bottomContent}</h4>
            </div>
        </div>
    )
}