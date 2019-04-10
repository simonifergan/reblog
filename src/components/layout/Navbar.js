import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
        <nav>
            <Link to='/'><h1>ReBlog</h1></Link>
            <Link to='/post/'><h1>New post</h1></Link>
            <Link to='/signup'><h1>Sign up</h1></Link>
        </nav>
    )
}