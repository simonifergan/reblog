import React, { useState } from 'react';

function emptyPost() {
    return {
        title: '',
        desc: '',
    }
}

const PostEdit = (props) => {
    const post = emptyPost();
    post.email = useFormInput(post.title);
    post.password = useFormInput(post.desc);

    const save = (e) => {
        e.preventDefault();
        const newPost = emptyPost();
        Object.keys(post).forEach(key => {
            newPost[key] = (post[key])? post[key].value : null;
        })
        props.savePost(newPost);
        props.history.push('/');

    }
    
    return (
        <section className="sign-up">
            <form onSubmit={save}>
                <input {...post.title}/>
                <textarea {...post.desc}></textarea>
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

export default PostEdit;