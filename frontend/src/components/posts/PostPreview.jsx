import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from '../../filters/Moment';
import UserPopUp from '../user/UserPopUp';

const PostPreview = ({ post }) => {
    const { user } = post;
    const [isUserPopUpVisible, setIsUserPopUpVisible] = useState(false);

    const showUserPopUp = (e) => setIsUserPopUpVisible(true);


    const hideUserPopUp = (e) => setIsUserPopUpVisible(false)



    const bottomContainer = (user)? (
        <div className="bottom-container">
                    <div onMouseOver={showUserPopUp} onMouseLeave={hideUserPopUp} className="user-popup-container">
                        {(isUserPopUpVisible) ? <UserPopUp user={user} /> : null}
                        <Link to={'/user/' + user._id}>
                            <span className="user-name"
                                title={`Go to ${user.firstname} ${user.lastname}'s profile`}
                            >
                                {user.firstname} {user.lastname}
                            </span>
                        </Link>
                    </div>
                    <p><Moment fromNow>{post.createdAt}</Moment></p>
                </div>
    ) : null;

    return (
        <li className="post-preview">
            <div className="post-text">
                <div className="top-container">
                    <Link to={'/post/' + post._id}><h2>{post.title}</h2></Link>
                    <Link to={'/post/' + post._id}><h3>{post.subtitle}</h3></Link>
                </div>
                {bottomContainer}
            </div>
            <Link to={'/post/' + post._id}><img src={post.thumbnail} alt="Post thumbnail" className="post-thumbnail" /></Link>
        </li>
    )
}

export default PostPreview;