const initState = {
    userToDisplay: null
};

const userReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_USER_TO_DISPLAY': 
            return {
                ...state,
                userToDisplay: action.user
            }
        default:
            return state;
        
    }
    
}

export default userReducer;