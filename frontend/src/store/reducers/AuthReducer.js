const initState = {
    user: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
        
    }
    
}

export default authReducer;