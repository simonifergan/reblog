import React, { useState } from 'react';

const SignIn = (props) => {
    const user = {}
    user.email = useFormInput('');
    user.password = useFormInput('');
    const [error, setError] = useState(false);

    const auth = async (e) => {
        e.preventDefault();
        let credentials = {}
        Object.keys(user).forEach(key => {
            credentials[key] = (user[key])? user[key].value : null;
        })
        const isAuth = await props.auth(credentials);
        if (isAuth) props.history.push('/');
        else setError(true);
    }
    
    return (
        <section className="sign-up">
            <form onSubmit={auth}>
            <div className="error-msg">{(error)? 'Wrong e-mail and/or password.': null}</div>
                <input {...user.email}/>
                <input {...user.password}/>
                <button type="submit">Sign in</button>
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

export default SignIn;