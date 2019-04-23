import React from 'react';
import './FollowButton.scss';

export default ({clickHandler, firstname}) => {
    return (
        <button title={(firstname)? `Follow ${firstname}`: null} className="btn btn-follow" onClick={clickHandler}>
            Follow
        </button>
    )
}