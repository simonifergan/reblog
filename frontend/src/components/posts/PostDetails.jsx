import React, { useState, useEffect } from 'react';
import { Editor, EditorState, convertFromRaw } from 'draft-js'
import 'draft-js/dist/Draft.css';
import './PostDetails.scss';
import './PostContainer.scss';


const PostDetails = (props) => {
  const [postId, setPostId] = useState(props.match.params.postId);
  const docTitle = document.title;
  const { post } = props;
  
  useEffect(() => {
    if (postId !== props.match.params.postId) {
      setPostId(props.match.params.postId);
      props.loadPostById(props.match.params.postId)
    } else props.loadPostById(props.match.params.postId)

    return () => {
      props.clearPostToDisplay();
    }
  }, [props.match.params.postId])

  useEffect(() => {
    if (post) {
      document.title = docTitle + ' - ' + post.title;
    }

    return () => {
      document.title = docTitle;
    }
  }, [post])

  return (post) ? (
    <section className="page post-details">
      <h1 className="title">{post.title}</h1>
      <div className="post-container">
        <Editor editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(post.content)))} readOnly />
      </div>
    </section>
  ) : null;
}

export default PostDetails
