import React from 'react';

const BlogPreview = ({blog}) => {
    return (
        <li className="blog-preview">
            <h2>{blog.title}</h2>
            <p>{blog.desc}</p>
        </li>
    )
}

export default BlogPreview;