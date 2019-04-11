import React, { useState, useEffect } from 'react';


const BlogDetails = (props) => {
  const [blogId, setBlogId] = useState(props.match.params.blogId);
  useEffect(() => {
    if (blogId !== props.match.params.blogId) {
      setBlogId(props.match.params.blogId);
      props.loadBlogById(props.match.params.blogId)
    } else props.loadBlogById(props.match.params.blogId)
    return () => {
      setBlogId(null);
    }
  }, [props.match.params.blogId])

  const {blog} = props;

  return (blog)? (
    <section>
      <h1>{blog.title}</h1>
      <p>{blog.desc}</p>
    </section>
  ) : 'There was an error, please refresh.';
}

export default BlogDetails
