import React from 'react';
import BlogPreview from './BlogPreview';


const BlogList = () => {
    return (
        <section className="blog-list">
            <h1>BlogList</h1>
            <ul>
                <BlogPreview blog={'I am 1'} />
                <BlogPreview blog={'I am 2'} />
                <BlogPreview blog={'I am 3'}  />
            </ul>
        </section>
    )
}

export default BlogList;