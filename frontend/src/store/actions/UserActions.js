// Services
import UserService from '../../services/UserService'

export const loadUserById = (userId) => {
    return async (dispatch) => {
        try {
            const user = await UserService.getById(userId);
            dispatch({ type: 'SET_USER_TO_DISPLAY', user })
            return true;
        } catch (err) {
            return false
        }
    }
}

export const clearUserToDisplay = () => {
    return (dispatch) => {
        dispatch({type: 'SET_USER_TO_DISPLAY', user: null })
    }
}

