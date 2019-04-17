import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ user, logout, history }) => {
    const onLogout = async () => {
        if (await logout()) history.push('/')
    }

    const links = (user) ?
        (
            <div className="links">
                <NavLink to='/new/post/'>New post</NavLink>
                <NavLink onClick={onLogout} to='#'>Log out</NavLink>
            </div>
        ) : (
            <div className="links">
                <NavLink to='/signup'>Sign up</NavLink>
                <NavLink to='/signin'>Sign in</NavLink>
            </div>
        );
    return (
        <nav className="main-nav">
            <div className="wrapper">
                <div className="logo">
                    <NavLink to='/'><h1>RePost</h1></NavLink>
                </div>
                {links}
            </div>
        </nav>
    )
}