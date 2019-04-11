// Services
import UserService from '../../services/UserService'

export const auth = (credentials) => {
    return async (dispatch) => {
        try {
            const user = await UserService.auth(credentials);
            dispatch({ type: 'SET_USER', user })
            return true;
        } catch (err) {
            return false
        }
    }
}

export const signup = (newUser) => {
    return async (dispatch) => {
        try {
            const user = await UserService.signup(newUser);
            dispatch({ type: 'SET_USER', user })
            return true;
        } catch (err) {
            return false
        }
    }
}