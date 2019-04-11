import React from 'react';

const BlogPreview = ({blog}) => {
    return (
        <li className="blog-preview">
            <div className="blog-content">
                <h2>{blog.title}</h2>
                <p>{blog.desc}</p>
            </div>
            <img src={blog.thumbnail} alt="" className="blog-thumbnail"/>
        </li>
    )
}

export default BlogPreview;