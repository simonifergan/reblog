const initState = {
    posts : [
        { id: 'post1', title: 'My first blog-post', desc: 'I am a blog post by some anonymous user, do you like me now?' },
        { id: 'post2', title: 'My second blog-post', desc: 'I am a blog post by some anonymous user, do you like me now?' },
        { id: 'post3', title: 'My whatever blog-post', desc: 'I am a blog post by some anonymous user, do you like me now?' },
    ]
};

const postReducer = (state = initState, action) => {
    return state;
}

export default postReducer;