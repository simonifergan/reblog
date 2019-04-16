import React, { useState } from 'react';

import './SignUp.scss';

function emptyUser() {
    return {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        desc: '',
    }
}

const SignUp = (props) => {
    const user = emptyUser();
    user.email = useFormInput(user.email);
    user.password = useFormInput(user.password);
    user.firstname = useFormInput(user.firstname);
    user.lastname = useFormInput(user.lastname);
    user.desc = useFormInput(user.desc);

    const save = (e) => {
        e.preventDefault();
        const newUser = emptyUser();
        Object.keys(user).forEach(key => {
            newUser[key] = (user[key])? user[key].value : null;
        })
        props.signup(newUser);
        props.history.push('/');

    }
    
    return (
        <section className="page sign-up-page">
            <form onSubmit={save}>
                <label>
                    E-mail:
                    <input type="email" placeholder="ex@example.com" {...user.email}/>
                </label>
                <label>
                    Password:
                    <input type="password" placeholder="Type a secret password" {...user.password}/>
                </label>
                <label>
                    First name:
                    <input placeholder="e.g. John" {...user.firstname}/>
                </label>
                <label>
                    Last name:
                    <input placeholder="e.g. Doe" {...user.lastname}/>
                </label>
                <label>
                    About:
                    <input placeholder="Share something about you" {...user.desc}/>
                </label>
                <button type="submit">Sign up</button>
            </form>
        </section>
    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    };
}

export default SignUp;