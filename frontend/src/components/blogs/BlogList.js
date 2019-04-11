import React from 'react';
import BlogPreview from './BlogPreview';
import {Link} from 'react-router-dom';


const BlogList = ({blogs}) => {
    const blogPreviews = blogs.map(blog => (<Link key={blog._id} to={'/blog/' + blog._id}><BlogPreview  blog={blog}/></Link>))
    return (
        <section className="blog-list">
            <ul>
                {blogPreviews}
            </ul>
        </section>
    )
}

export default BlogList;