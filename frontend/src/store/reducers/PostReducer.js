const initState = {
    posts: [],
    postToDisplay: null,
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {
                ...state,
                posts: action.posts
            }
        case 'REMOVE_POST':
            const updatedPosts = state.posts.filter(post => post._id !== action.postId)
            return {
                ...state,
                posts: updatedPosts
            }
        case 'SET_POST_TO_DISPLAY':
            return {
                ...state,
                postToDisplay: action.post
            }
        default:
            return state
    }
}

export default postReducer;