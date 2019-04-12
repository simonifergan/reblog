import React, { useState, useEffect } from 'react';
import PostList from '../posts/PostList';


const BlogDetails = (props) => {
  const [blogId, setBlogId] = useState(props.match.params.blogId);
  useEffect(() => {
    if (blogId !== props.match.params.blogId) {
      setBlogId(props.match.params.blogId);
      props.loadBlogById(props.match.params.blogId)
    } else props.loadBlogById(props.match.params.blogId)
    return () => {
      props.clearBlogToDisplay();
    }
  }, [props.match.params.blogId])

  const {blog} = props;

  return (blog)? (
    <section className="blog-details">
      <article className="blog-info">
        <h2>{blog.title}</h2>
        <p>{blog.desc}</p>
        <img src={blog.thumbnail} alt=""/>
      </article>
      <PostList posts={blog.posts} />
    </section>
  ) : null;
}

export default BlogDetails
