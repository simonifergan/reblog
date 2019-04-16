import React from 'react';
import './UserPopUp.scss';

export default ({user}) => {
    const style = {
        backgroundImage: `url('${user.profilePic}')`
    }
    return (
        <div className="user-pop-up">
            <div className="user-thumbnail" style={style} />
        </div>
    )
}