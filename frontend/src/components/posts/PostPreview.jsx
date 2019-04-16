import React from 'react';

const PostPreview = ({ post }) => {
    return (
        <li className="post-preview">
            <div className="post-intro">
                <h2>{post.title}</h2>
                <h3>{post.subtitle}</h3>
            </div>
            <img src={post.thumbnail} alt="Post thumbnail" className="post-thumbnail"/>
        </li>
    )
}

export default PostPreview;