const initState = {
   postToDisplay: null,
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
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