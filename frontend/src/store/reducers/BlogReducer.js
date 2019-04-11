
const initState = {
    blogs: []
};

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_BLOGS':
            return {
                ...state,
                blogs: action.blogs
            }
        default:
            return state
            

    }
}

export default blogReducer;