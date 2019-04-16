import React from 'react';
import './UserPopUp.scss';

const UserPopUp = ({ user }) => {
    const style = {
        backgroundImage: `url('${user.profilePic}')`
    }
    return (
        <div className="user-pop-up">
            <div className="user-info">
                <h2>{user.firstname} {user.lastname}</h2>
                <p>{user.desc}</p>
            </div>
            <div className="user-thumbnail" style={style} />
        </div>
    )
}

export default React.memo(UserPopUp);