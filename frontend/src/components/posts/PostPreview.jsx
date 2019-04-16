import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Moment from '../../filters/Moment';
import UserPopUp from '../user/UserPopUp';

const PostPreview = ({ post }) => {
    const { user } = post;
    const [isUserPopUpVisible, setIsUserPopUpVisible] = useState(false);
    let hidePopUpTimeout = null;

    const showUserPopUp = (e) => {
        if (hidePopUpTimeout) clearTimeout(hidePopUpTimeout);
        setTimeout(() => setIsUserPopUpVisible(true), 300);
    }

    const hideUserPopUp = (e) => {
        if (hidePopUpTimeout) clearTimeout(hidePopUpTimeout);
        hidePopUpTimeout = setTimeout(() => setIsUserPopUpVisible(false), 800);
    }


    return (
        <li className="post-preview">
            <div className="post-text">
                <div className="top-container">
                    <Link to={'/post/' + post._id}><h2>{post.title}</h2></Link>
                    <Link to={'/post/' + post._id}><h3>{post.subtitle}</h3></Link>
                </div>
                <div className="bottom-container">
                    <div onMouseOver={showUserPopUp} onMouseLeave={hideUserPopUp} className="user-popup-container">
                        {(isUserPopUpVisible) ? <UserPopUp user={user} /> : null}
                        <Link to={'/user/' + user._id}>
                            <p className="user-name"
                                title={`Go to ${user.firstname} ${user.lastname}'s profile`}
                            >
                                {user.firstname} {user.lastname}
                            </p>
                        </Link>
                    </div>
                    <p><Moment fromNow>{post.createdAt}</Moment></p>

                </div>
            </div>
            <Link to={'/post/' + post._id}><img src={post.thumbnail} alt="Post thumbnail" className="post-thumbnail" /></Link>
        </li>
    )
}

export default PostPreview;