import React from 'react';
import PostPreview from './PostPreview';

import './PostList.scss';

const PostList = ({posts, history, match}) => {
    const postPreviews = posts.map(post => <PostPreview key={post._id} post={post}/>)
    const classNames = (match.path !== '/') ? 'post-list' : 'page post-list';
    return (
        <section className={classNames}>
            <ul>
                {postPreviews}
            </ul>
        </section>
    )
}

export default PostList;