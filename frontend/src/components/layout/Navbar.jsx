import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user }) => {
    const links = (user) ?
        (
            <div className="links">
                <Link to='/new/post/'><h1>New post</h1></Link>
            </div>
        ) : (
            <div className="links">
                <Link to='/signup'><h1>Sign up</h1></Link>
                <Link to='/signin'><h1>Sign in</h1></Link>
            </div>
        );
    return (
        <nav className="main-nav">
            <div className="wrapper">
                <div className="logo">
                    <Link to='/'><h1>RePost</h1></Link>
                </div>
                {links}
            </div>
        </nav>
    )
}