import auth from './AuthReducer';
import blog from './BlogReducer';
import post from './PostReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth,
    blog,
    post,
})

export default rootReducer;

