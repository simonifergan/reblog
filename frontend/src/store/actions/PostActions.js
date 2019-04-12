import PostService from '../../services/PostService';

export const loadPostById = (postId) => {
    return async (dispatch) => {
        try {
            const post = await PostService.getById(postId);
            dispatch({type: 'SET_POST_TO_DISPLAY', post})
        } catch(err) {
            console.log(err);
        }

    }
}