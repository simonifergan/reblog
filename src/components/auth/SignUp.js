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
        props.history.push('/');
    }
    
    return (
        <section className="sign-up">
            <form onSubmit={save}>
                <input {...user.email}/>
                <input {...user.password}/>
                <input {...user.firstname}/>
                <input {...user.lastname}/>
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