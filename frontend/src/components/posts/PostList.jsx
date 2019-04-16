import React from 'react';
import PostPreview from './PostPreview';

import './PostList.scss';

const PostList = ({posts}) => {
    const postPreviews = posts.map(post => <PostPreview key={post._id} post={post}/>)
    return (
        <section className="page post-list">
            <ul>
                {postPreviews}
            </ul>
        </section>
    )
}

export default PostList;