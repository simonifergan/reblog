import React, { useState, useEffect } from 'react';

function emptyBlog() {
    return {
        title: '',
        description: '',
        keywords: [],
    }
}

const BlogEdit = (props) => {
    const [blog, setBlog] = useState(emptyBlog());


    useEffect(() => {
        const { blogId } = props.match.params;
        if (blogId) {
            console.log('Got:', blogId);
        }
    }, [blog])
    return (
        <section className="blog-edit">
            <h1>Blog Edit</h1>
        </section>
    )
}


export default BlogEdit;