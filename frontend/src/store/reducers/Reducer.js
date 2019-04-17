import auth from './AuthReducer';
import blog from './BlogReducer';
import post from './PostReducer';
import user from './UserReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth,
    blog,
    post,
    user
})

export default rootReducer;

