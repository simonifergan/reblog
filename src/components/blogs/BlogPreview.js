import React from 'react';

const BlogPreview = ({blog}) => {
    return (
        <li className="blog-preview">
            <h2>Blog Title</h2>
            <p>Blog Short Description</p>
            <p>Property: {blog}</p>
        </li>
    )
}

export default BlogPreview;