import React from 'react';
import BlogPreview from './BlogPreview';


const BlogList = ({blogs}) => {
    const blogPreviews = blogs.map(blog => (<BlogPreview key={blog.id} blog={blog}/>))
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