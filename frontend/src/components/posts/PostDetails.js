import React, { useState, useEffect } from 'react';

const PostDetails = (props) => {
  const [postId, setPostId] = useState(props.match.params.postId);
  useEffect(() => {
    if (postId !== props.match.params.postId) {
      setPostId(props.match.params.postId);
      props.loadPostById(props.match.params.postId)
    } else props.loadPostById(props.match.params.postId)
    return () => {
      setPostId(null);
    }
  }, [props.match.params.postId])

  const {post} = props;

  return (post)? (
    <section className="post-details">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
    </section>
  ) : 'There was an error, please refresh.';
}

export default PostDetails
