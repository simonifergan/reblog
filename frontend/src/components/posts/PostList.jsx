import React from 'react';
import PostPreview from './PostPreview';
import {Link} from 'react-router-dom';


const PostList = ({posts}) => {
    const postPreviews = posts.map(post => (<Link key={post._id} to={'/post/' + post._id}><PostPreview  post={post}/></Link>))
    return (
        <section className="post-list">
            <ul>
                {postPreviews}
            </ul>
        </section>
    )
}

export default PostList;