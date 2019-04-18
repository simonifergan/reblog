import React, { useState, useEffect } from 'react';

import './UserDetails.scss';

import PostList from '../posts/PostList';
import UserPreview from './UserPreview';


export default (props) => {
    const [userId, setUserId] = useState(null)
    const { user } = props;

    useEffect(() => {
        if (userId !== props.match.params.userId) {
            setUserId(props.match.params.userId);
            props.loadUser(props.match.params.userId)
        }

        return () => {
            props.clearUser();
        }
    }, [props.match.params.userId])



    return (user) ? (
        <section className="page user-details">
            <article className="user-info">
                <UserPreview user={user} />
            </article>
            <article className="user-posts-container">
                <h2>{user.firstname}'s posts</h2>
                {(user.posts.length) ? <PostList match={props.match} posts={user.posts} /> : null}
            </article>
        </section>
    ) : null
}