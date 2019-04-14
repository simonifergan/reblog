import React, { useState } from 'react';

function emptyUser() {
    return {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    }
}

const SignUp = (props) => {
    const user = emptyUser();
    user.email = useFormInput(user.email);
    user.password = useFormInput(user.password);
    user.firstname = useFormInput(user.firstname);
    user.lastname = useFormInput(user.lastname);

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
                    <input {...user.email}/>
                </label>
                <label>
                    Password:
                    <input {...user.password}/>
                </label>
                <label>
                    First name:
                    <input {...user.firstname}/>
                </label>
                <label>
                    Last name:
                    <input {...user.lastname}/>
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