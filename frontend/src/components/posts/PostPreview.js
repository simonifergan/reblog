import React from 'react';

const PostPreview = ({ post }) => {
    return (
        <li className="post-preview">
            <h3>{post.title}</h3>
        </li>
    )
}

export default PostPreview;