import React, { useState, useEffect } from 'react';
import { Editor, EditorState, convertFromRaw } from 'draft-js'
import 'draft-js/dist/Draft.css';
import './PostDetails.scss';
import './PostContainer.scss';
import UserPreview from '../user/UserPreview'


const PostDetails = (props) => {
  const [postId, setPostId] = useState(props.match.params.postId);
  const docTitle = document.title;
  const { post, user } = props;

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


  const remove = async () => {
    const res = await props.removePost(postId);
    if (res) props.history.push('/');
  }

  return (post) ? (
    <section className="page post-details">
      {(user && user._id === post.userId)? <button className="btn btn-remove-post" onClick={remove}>Delete post</button> : null}
      <div className="post-intro">
        <h1 className="title">{post.title}</h1>
        <h2 className="subtitle">{post.subtitle}</h2>
        <UserPreview user={post.user} postCreatedAt={post.createdAt} />
      </div>
      <div className="post-container">
        <Editor editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(post.content)))} readOnly />
      </div>
    </section>
  ) : null;
}

export default PostDetails;