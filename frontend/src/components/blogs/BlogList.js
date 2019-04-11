import React from 'react';
import BlogPreview from './BlogPreview';
import {Link} from 'react-router-dom';


const BlogList = ({blogs}) => {
    const blogPreviews = blogs.map(blog => (<Link key={blog.id} to={'/blog/' + blog._id}><BlogPreview  blog={blog}/></Link>))
    return (
        <section className="blog-list">
            <h1>BlogList</h1>
            <ul>
                {blogPreviews}
            </ul>
        </section>
    )
}

export default BlogList;