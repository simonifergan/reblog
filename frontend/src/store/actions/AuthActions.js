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

export const logout = () => {
    return async (dispatch) => {
        const res = await UserService.logout();
        if (res) {
            dispatch({ type: 'SET_USER', user: null })
            return res;
        } else return res;
    }
}