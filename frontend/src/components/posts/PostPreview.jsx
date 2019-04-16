import React from 'react';
import Moment from '../../filters/Moment';
import UserPopUp from '../user/UserPopUp';

const PostPreview = ({ post }) => {
    const { user } = post;
    return (
        <li className="post-preview">
            <div className="post-text">
                <div className="top-container">
                    <h2>{post.title}</h2>
                    <h3>{post.subtitle}</h3>
                </div>
                <div className="bottom-container">
                    <div className="user-popup-container">
                        <p>{user.firstname} {user.lastname}</p>
                        <UserPopUp user={user}/>
                    </div>
                    <p><Moment fromNow>{post.createdAt}</Moment></p>

                </div>
            </div>
            <img src={post.thumbnail} alt="Post thumbnail" className="post-thumbnail" />
        </li>
    )
}

export default PostPreview;