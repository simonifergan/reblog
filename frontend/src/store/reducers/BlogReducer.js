
const initState = {
    blogs: [],
    blogToDisplay: null,
};

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_BLOGS':
            return {
                ...state,
                blogs: action.blogs
            }
        case 'SET_BLOG_TO_DISPLAY':
            return {
                ...state,
                blogToDisplay: action.blog,
            }
        default:
            return state


    }
}

export default blogReducer;