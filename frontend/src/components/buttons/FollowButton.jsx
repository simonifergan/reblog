import React from 'react';
import './FollowButton.scss';

export default ({clickHandler}) => {
    return (
        <button className="btn btn-follow" onClick={clickHandler}>
            Follow
        </button>
    )
}